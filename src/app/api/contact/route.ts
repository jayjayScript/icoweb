import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import UserEmail from '../../../../react-email-starter/emails/IcowebUserEmail';
import { render } from '@react-email/components';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  console.log('API route hit');

  try {
    const body = await request.json();
    console.log('Received data:', body);

    const { name, email, whatsapp, service, message } = body;

    const html = await render(
      UserEmail({ 
        name, 
        email, 
        whatsapp,
        service, 
        message 
      })
    );

    await resend.emails.send({
      from: 'onboarding@resend.dev', // or your verified domain email
      to: 'icowebagency@gmail.com',
      replyTo: email,
      subject: `New Contact Form: ${service}`,
      html
    });

    console.log('Email sent successfully:');
    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    // Avoid `any` — safely extract possible error details
    let details: unknown;
    if (typeof error === 'object' && error !== null) {
      const errObj = error as { response?: { data?: unknown }; message?: string };
      details = errObj.response?.data ?? errObj.message ?? JSON.stringify(errObj);
      console.error('Full error:', errObj.response?.data ?? errObj);
    } else {
      details = String(error);
      console.error('Full error:', details);
    }

    return NextResponse.json({
      error: 'Failed to send email',
      details
    }, { status: 500 });
  }
}
