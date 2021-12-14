const sgMail = require('@sendgrid/mail')
const logger = require('pino')()

export default async function (req, res) {
    sgMail.setApiKey("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")

    logger.info("request text:" + req);
    logger.info("request body:" + req.body);

    const { name, phone, email } = req.body

    //Another validation on server side for phone number
    if (!phone.match("^\\+?(972\\-?)?0?(([23489]{1}\\-?\\d{7})|[5]{1}\\d{1}\\-?\\d{7})$")) {
        return res.status(403).send('Phone number is incorrect')
    }

    const content = {
        to: 'yulev5@gmail.com',
        from: 'powertoolsrentals@gmail.com',
        subject: `הודעת צור קשר חדשה מאת - ${name}`,
        text: `הודעת צור קשר חדשה`,
        html: `<p>
    שם: ${name}<br>
    טלפון: ${phone}<br>
    אימייל: ${email}<br>
    </p>`
    }

    try {
        await sgMail.send(content)
        return res.status(200).send('Message sent successfully.')
    } catch (error) {
        return res.status(400).send('Message not sent.')
    }
}