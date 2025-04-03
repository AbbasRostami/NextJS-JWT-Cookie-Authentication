"use client";

import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";

export default function SignupForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
  });

  const onSubmit = async (values: Record<string, string>) => {
    startTransition(async () => {
      try {
        const res = await axios.post("/api/auth/signup", values);
        toast.success(res?.data?.message);
        router.push("/login");
      } catch (error: any) {
        toast.error(error?.response?.data?.error);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-gray-900 shadow-xl rounded-3xl p-8 w-full max-w-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-500 opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-36 h-36 bg-purple-500 opacity-20 blur-2xl"></div>

        <h2 className="text-3xl font-extrabold text-center text-slate-300 mb-4 tracking-tight drop-shadow-lg">
          Sign Up
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-1">
            <div>
              <label className="block text-blue-400 text-base">Username:</label>
              <Field
                type="text"
                name="username"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 transform hover:scale-105"
                placeholder="Enter your username"
              />
              <ErrorMessage
                name="username"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-blue-400 text-base">Email:</label>
              <Field
                type="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 transform hover:scale-105"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-blue-400 text-base">Password:</label>
              <Field
                type="password"
                name="password"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 transform hover:scale-105"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-blue-400 text-base">
                Confirm Password:
              </label>
              <Field
                type="password"
                name="confirmPassword"
                className="w-full p-4 mb-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 transform hover:scale-105"
                placeholder="Confirm your password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl text-lg font-semibold tracking-wide 
                   hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
              disabled={isPending}
            >
              {isPending ? (
                <div className="flex justify-center items-center">
                  <div className="spinner-border animate-spin w-6 h-6 border-t-2 border-b-2 border-white rounded-full"></div>
                </div>
              ) : (
                "Register"
              )}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
