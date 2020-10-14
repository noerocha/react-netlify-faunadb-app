const sendQuery = require("./utils/sendQuery");
const { GET_LINKS } = require("./utils/queries");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  try {
    const result = await sendQuery(GET_LINKS);
    const data = result.allLinks.data;

    return formattedResponse(200, data);
  } catch (error) {
    console.error(error);
    return formattedResponse(500, { msg: "Somehing went Wrong !" });
  }
};
