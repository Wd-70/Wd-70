import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = contactSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { 
          success: false,
          errors: validation.error.errors 
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;
    const userIP = request.headers.get('x-forwarded-for') || '알 수 없음';
    const userAgent = request.headers.get('user-agent') || '알 수 없음';

    // 이메일 전송
    const emailResult = await sendEmail({
      to: process.env.EMAIL_TO || 'kjk7052@gmail.com',
      subject: `[포트폴리오] 새로운 메시지 도착 - ${name}님`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">새로운 메시지가 도착했습니다</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>이메일:</strong> ${email}</p>
            <p><strong>메시지:</strong></p>
            <div style="white-space: pre-line; background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message}
            </div>
          </div>
          
          <div style="margin-top: 30px; font-size: 14px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 20px;">
            <p><strong>발신자 정보:</strong></p>
            <p>IP 주소: ${userIP}</p>
            <p>User Agent: ${userAgent}</p>
            <p>전송 일시: ${new Date().toLocaleString('ko-KR')}</p>
          </div>
        </div>
      `,
    });

    if (!emailResult.success) {
      throw new Error('이메일 전송에 실패했습니다.');
    }

    return NextResponse.json({ 
      success: true,
      message: '메시지가 성공적으로 전송되었습니다.'
    });

  } catch (error) {
    console.error('메시지 전송 오류:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : '서버 오류가 발생했습니다.'
      },
      { status: 500 }
    );
  }
}
