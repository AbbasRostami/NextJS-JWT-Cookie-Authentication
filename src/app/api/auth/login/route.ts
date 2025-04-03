import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { users } from '@/app/lib/users';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'لطفاً تمام فیلدها را پر کنید.' },
        { status: 400 }
      );
    }

    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
      return NextResponse.json(
        { error: 'ایمیل یا رمز عبور اشتباه است.' },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: '1d' }
    );

    const cookieStore = await cookies(); 
    cookieStore.set('token', token, {
      httpOnly: true,  
      secure: true,  
      sameSite: 'lax', 
      maxAge: 60 * 60 * 24 * 1, 
      path: '/',     
    });

    return NextResponse.json({ message: 'ورود موفقیت‌آمیز بود' }, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'خطایی در پردازش درخواست رخ داد.' },
      { status: 500 }
    );
  }
}
