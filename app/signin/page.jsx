import AuthContextProvider from "@/lib/contexts/AuthContext";
import SignInButton from "./components/SignInButton";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="p-6 rounded-xl shadow-lg bg-white">
        <h1 className="text-xl font-semibold mb-4 text-slate-800">
          Sign in to Your Account
        </h1>
        <AuthContextProvider>
          <SignInButton />
        </AuthContextProvider>
      </div>
    </div>
  );
}
