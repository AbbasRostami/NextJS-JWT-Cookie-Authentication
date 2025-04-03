"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getUserData() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  console.log("Token in Server Action:", token);

  if (!token) {
    return { isLoggedIn: false, user: null };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      name: string;
      email: string;
    };
    
    return {
      isLoggedIn: true,
      user: {
        name: decoded.name,
        email: decoded.email,
      },
    };
  } catch (error) {
    console.error("Invalid token:", error);
    return { isLoggedIn: false, user: null };
  }
}


export async function logout() {
  const cookieStore = await cookies();

 
  cookieStore.set("token", "", { 
    path: "/", 
    httpOnly: true, 
    secure: true, 
    sameSite: "lax", 
    maxAge: 0 
  });

  return { success: true };
}
