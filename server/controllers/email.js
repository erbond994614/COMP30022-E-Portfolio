const nodemailer = require("nodemailer");
const SecurityCodeStore = require('../dbModels/securityCodeStore');


/**
 * email config
 */
const senderAccount = 'quickportfolio@163.com';
const senderPass = 'NKBFFHBJBDBVPWAE';
const senderHost = 'smtp.163.com';
const chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


/**
 * create random security code 
 * @param {String} email 
 */
const createEmailSc = async (email) => {
    let securityCode = Array.from(new Array(6)).map(item => {
        return chars[Math.floor(Math.random() * chars.length)];
    }).join('');
    let log = new SecurityCodeStore({
        scode:securityCode,
        email:email,
        createdAt:new Date()
    })
    await log.save();
    return securityCode;
} 

/**
 * send email to user mail
 * @param {String} info 
 * @param {String} targetAccount 
 */
const sendEmail = async function (info,targetAccount) {
    let transporter = nodemailer.createTransport({
        host: senderHost,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: senderAccount, // generated ethereal user
          pass: senderPass, // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      await transporter.sendMail({
        from: senderAccount, // sender address
        to: targetAccount, // list of receivers
        subject: `Password Reset`,
        text: `Your security code is ${info}.Please use the security code for password reset` // plain text body
      });

}

module.exports = {
  createEmailSc,
  sendEmail
}