const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
function sendEmail(body){
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'michael.spencer1@g.austincc.edu',
                pass: 'Hhh440826hh'
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: `"${ body.name }" <michael.spencer1@g.austincc.edu>`, // sender address
            to: 'michael.spencer1@g.austincc.edu', // list of receivers
            subject: 'FROM PERSONAL PORTFOLIO', // Subject line
            text: '',
            html: `<strong>Phone Number: </strong>${ body.number }<br />
                   <strong>email: </strong>${ body.email }<br />
                   <strong>Message: </strong>${ body.message }` // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
}

app.use(express.static(path.resolve(__dirname)))
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.post('/contact', urlencodedParser, function(req, res){
    // sendEmail(req.body)
})

const port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log('connected to port', port)
})
