const getContactsList = require("./getContactsList");

const getContactById = async (id) => {
  const contacts = await getContactsList();
  const result = contacts.find((item) => item.id.toString() === id);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getContactById;
