exports.handler = (event, context, callbak) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "Hello World !" }),
  };
};
