const getContactsList = require("./getContactsList");
const updateContacts = require("./updateContacts");

const removeById = async (id) => {
  const contacts = await getContactsList();
  const idx = contacts.findIndex((item) => item.id.toString() === id);
  if (idx === -1) {
    return null;
  }
  const removeContact = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return removeContact;
};

module.exports = removeById;
