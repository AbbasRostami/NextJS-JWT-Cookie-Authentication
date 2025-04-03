'use server';

export async function createPost(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  if (!title || !content) {
    throw new Error('عنوان و محتوا الزامی هستند');
  }

  console.log('پست جدید ایجاد شد:', { title, content });

  return { success: true, message: 'پست با موفقیت ثبت شد' };
}
