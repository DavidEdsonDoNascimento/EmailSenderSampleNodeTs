interface EmailTo {
    name: string;
    email: string;
}

interface EmailMessage {
    subject: string;
    body: string;
    attachments?: string[];
}

export default class EmailService {
    
    static async sendEmail(to: EmailTo, message: EmailMessage){
        console.log(`Email enviado para ${to.name} : ${message.subject}`);
    }

}