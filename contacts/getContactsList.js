const fs = require("fs/promises");
const contactsPath = require("./contactsPath");

const getContactsList = async () => {
  const data = await fs.readFile(contactsPath);
  const contactsList = JSON.parse(data);
  return contactsList;
};

module.exports = getContactsList;
