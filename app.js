const chalk = require("chalk");
const { Command } = require("commander");
const contactsOperations = require("./contacts");

const program = new Command();

program
  .requiredOption("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const contacts = await contactsOperations.getContactsList();
        console.table(contacts);
        break;

      case "get":
        const contact = await contactsOperations.getContactById(id);
        if (contact === null) {
          console.log(chalk.red("Contact not found"));
          console.log(contact);
          return;
        }
        console.log(chalk.green("Contact found"));
        console.log(contact);
        break;

      case "add":
        const newContact = await contactsOperations.addContact(
          name,
          email,
          phone
        );
        console.log(chalk.green("Add new contact"));
        console.log(newContact);
        break;

      case "remove":
        const removeContact = await contactsOperations.removeById(id);
        if (removeContact === null) {
          console.log(chalk.red("Contact not found"));
          console.log(removeContact);
          return;
        }
        console.log(chalk.green("Contact deleted"));
        console.log(removeContact);
        break;

      default:
        console.warn(chalk.red("Unknown action type!"));
    }
  } catch (error) {
    console.error(chalk.red(error.message));
  }
};

invokeAction(argv);
