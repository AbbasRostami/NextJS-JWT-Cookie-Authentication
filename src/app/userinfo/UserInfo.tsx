"use client";
import { useAuth } from "../context/CoockiesProvider";

export default function UserInfo() {
  const { user } = useAuth();
  console.log("User in UserInfo:", user);

  if (user === null) {
    return (
      <p className="text-center text-gray-500  animate-pulse">Loading...</p>
    );
  }

  if (!user) {
    return <p className="text-center text-gray-500">No user found</p>;
  }

  return (
    <>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
        User:
      </span>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 ml-2">
        {user.email}
      </span>
    </>
  );
}
