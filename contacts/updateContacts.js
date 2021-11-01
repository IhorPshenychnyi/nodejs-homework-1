const fs = require("fs/promises");

const contactsPath = require("./contactsPath");

const updateContacts = async (newContacts) => {
  const contactsStr = JSON.stringify(newContacts, null, 2);
  await fs.writeFile(contactsPath, contactsStr);
};

module.exports = updateContacts;
