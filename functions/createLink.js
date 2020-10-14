const sendQuery = require("./utils/sendQuery");
const { CREATE_LINK } = require("./utils/queries");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  try {
    const { name, url, description } = JSON.parse(event.body);
    const variables = { name, url, description, archived: false };

    const { createLink: createdLink } = await sendQuery(CREATE_LINK, variables);

    return formattedResponse(200, createdLink);
  } catch (error) {
    console.error(error);
    return formattedResponse(500, { msg: "Somehing went Wrong !" });
  }
};
