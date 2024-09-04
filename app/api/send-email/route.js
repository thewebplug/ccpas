import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

export async function POST(request) {
    return process.env.API_KEY;
    
  const sentFrom = new Sender("trial-yzkq3403wox4d796.mlsender.net", "Saleem Jibril");
  const recipients = [
    new Recipient("your@client.com", "Your Client")
  ];
  const cc = [
    new Recipient("saleemjibril5@gmail.com", "Your Client CC")
  ];
  const bcc = [
    new Recipient("your_bcc@client.com", "Your Client BCC")
  ];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setCc(cc)
    .setBcc(bcc)
    .setSubject("This is a Subject")
    .setHtml("<strong>This is the HTML content</strong>")
    .setText("This is the text content");

  try {
    const response = await mailerSend.email.send(emailParams);
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}