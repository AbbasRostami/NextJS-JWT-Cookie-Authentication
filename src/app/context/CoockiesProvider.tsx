"use client";
import { getUserData } from "@/actions/isLogin";
import { atom, useAtom } from "jotai";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

export const isLoggedInAtom = atom<boolean | null>(null);
export const userAtom = atom<{ name?: string; email?: string } | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setIsLoggedIn(data.isLoggedIn);
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    fetchData();
  }, [setIsLoggedIn, setUser]);  // افزودن setIsLoggedIn و setUser به وابستگی‌ها

  return <>{children}</>;
}

export function useAuth() {
  const [isLoggedIn] = useAtom(isLoggedInAtom);
  const [user] = useAtom(userAtom);

  return { isLoggedIn, user };
}
