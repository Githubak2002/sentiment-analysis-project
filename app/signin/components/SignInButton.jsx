"use client";

import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/lib/contexts/AuthContext";

export default function SignInButton() {
  const { user, isLoading, error, handleSignInWithGoogle, handleLogOut } =
    useAuth();

  if (user) {
    return (
      <div>
        <h1>Logged In</h1>
      </div>
    );
  }

  return (
    <>
      {error && <p className="text-red-400">{error}</p>}
      <button
        onClick={handleSignInWithGoogle}
        disabled={isLoading}
        className="flex items-center justify-center gap-3 px-6 py-2 rounded-2xl shadow-md bg-slate-100 hover:bg-slate-200 text-slate-900 transition duration-200 text-base font-medium"
      >
        <FcGoogle className="text-xl" />
        <span>{isLoading ? "Loading" : "Sign in with Google"}</span>
      </button>
    </>
  );
}
