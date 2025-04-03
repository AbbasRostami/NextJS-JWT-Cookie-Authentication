"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { isLoggedInAtom, useAuth } from "@/app/context/CoockiesProvider";
import { logout } from "@/actions/isLogin";
import toast from "react-hot-toast";
import { useSetAtom } from "jotai";
const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);

  const { isLoggedIn } = useAuth();
  console.log("User Login: ", isLoggedIn);

  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  const handleLogout = async () => {
    try {
      await logout();
      setIsLoggedIn(false);
      router.push("/login");
      toast.success("با موفقیت خارج شدید");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("مشکلی در خروج رخ داد");
    }
  };

  const linkStyle = (href: string) => `
    relative text-xl font-semibold transition-all duration-300
    ${pathname === href ? "text-teal-400" : "text-gray-300"}
    hover:text-teal-300
    after:absolute after:content-[''] 
    after:w-full after:h-[2px] 
    after:bg-gradient-to-r after:from-teal-400 after:via-green-400 after:to-yellow-400
    after:left-0 after:bottom-[-6px] 
    after:scale-x-0 hover:after:scale-x-100 
    after:transition-transform after:duration-500
    hover:drop-shadow-[0_0_8px_#14b8a6]`;

  return (
   <header className="bg-gray-900 text-white py-6 relative overflow-hidden shadow-lg">
      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <div className="w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-10">
        <ul className="flex justify-center gap-8 items-baseline">
          <li className="text-2xl font-semibold tracking-wide text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
            <Link href="/" className={linkStyle("/")}>
              Your Company
            </Link>
          </li>

          {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-xl font-semibold text-red-600"
              >
                Logout
              </button>
            ) : (
              <>
                <li>
                  <Link href="/register" className={linkStyle("/register")}>
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/login" className={linkStyle("/login")}>
                    Login
                  </Link>
                </li>
              </>
            )}
        </ul>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/form" className={`text-lg ${linkStyle("/form")}`}>
                Form
              </Link>
            </li>
            <li>
              <Link href="/posts" className={`text-lg ${linkStyle("/posts")}`}>
                Posts
              </Link>
            </li>
            <li>
              <Link href="/users" className={`text-lg ${linkStyle("/users")}`}>
                Users
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-lg ${linkStyle("/contact")}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="absolute -top-10 left-10 w-32 h-32 bg-indigo-500 opacity-20 blur-3xl animate-bounce"></div>
      <div className="absolute bottom-0 right-10 w-24 h-24 bg-purple-500 opacity-20 blur-2xl animate-pulse"></div>
    </header>
  );
};

export default Header;
