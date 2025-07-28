import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, message } = data;

  const to = process.env.CONTACT_EMAIL;
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '0', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!to || !host || !port || !user || !pass) {
    console.error('Missing email configuration');
    return NextResponse.json({ success: false }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: user,
    to,
    subject: `Message from ${name}`,
    replyTo: email,
    text: message,
  });

  return NextResponse.json({ success: true });
}
