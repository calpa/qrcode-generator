const QRCode = require("qrcode");

const generateQRCodeUrl = async url => {
  try {
    const image = await QRCode.toDataURL(url);
    return image;
  } catch (err) {
    // TODO: Send error log to database
    console.error(err);
  }
};

exports.handler = async (event, context) => {
  const url = event.queryStringParameters.url || "https://calpa.me";
  const output = await generateQRCodeUrl(url);

  return {
    statusCode: 200,
    body: output
  };
};
