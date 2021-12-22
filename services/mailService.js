import nodemailer from 'nodemailer';
import config from 'config';

class MailService {
    transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: config.get('smtpHost'),
            port: config.get('smtpPort'),
            secure: false,
            auth: {
                user: config.get('smtpUser'),
                pass: config.get('smtpPassword'),
            },
        });
    }

    async sendMessage(email, name, message) {
        await this.transporter.sendMail({
            from: config.get('smtpUser'),
            to: config.get('smtpUser'),
            subject: 'Новое сообщение от ' + email,
            text: '',
            html: `
            <div>
                <h2>
                Имя отправителя: ${name}
                </h2>
                <h3>
                    Текст сообщения:${message}
                </h3>
            </div>`,
        });
    }
}
export default new MailService();
