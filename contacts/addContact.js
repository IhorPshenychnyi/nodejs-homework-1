const crypto = require("crypto");

const getContactsList = require("./getContactsList");
const updateContacts = require("./updateContacts");

const addContact = async (name, email, phone) => {
  const contacts = await getContactsList();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

module.exports = addContact;
