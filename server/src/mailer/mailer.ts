import * as mailer from 'nodemailer';

const auth = (process.env.SMTP_PASSWORD && process.env.SMTP_USER) ? {
  pass: process.env.SMTP_PASSWORD,
  user: process.env.SMTP_USER,
} : null;

const transport = mailer.createTransport({
  auth,
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: process.env.SMTP_SECURE === 'true',
});

const from = `"Ebay Alert Program" <${process.env.SMTP_FROM}>`;

export function sendHtmlEmail(to: string, subject: string, html: string) {
  return transport.sendMail({
    from,
    html,
    subject,
    to,
  });
}

export function sendTextEmail(to: string, subject: string, text: string) {
  return transport.sendMail({
    from,
    subject,
    text,
    to,
  });
}
