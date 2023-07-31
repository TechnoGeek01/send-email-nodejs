const nodeMailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

// const sendEmailEthereal = async (req,res) => {
//     let testAccount = await nodeMailer.createTestAccount();

//     const transporter = nodeMailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: process.env.ETHEREAL_EMAIL_ACCOUNT,
//             pass: process.env.ETHEREAL_EMAIL_PASSWORD
//         }
//     });

//     let info = await transporter.sendMail({
//         from:"Coding Addict <codingaddict@test.com>" ,
//         to:"bar@example.com",
//         subject:"Hello",
//         html:"<h2>Sending Emails with Node.js</h2>"
//     });

//     res.json(info);
// }

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "test-1@test.com", // Change to your recipient
    from: "test-1@test.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<h2>Sending Emails with Node.js</h2>",
  };

  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
