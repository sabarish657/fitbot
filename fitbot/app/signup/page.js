"use client";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Import functions from Firebase v9+
import { useRouter } from "next/navigation";
import { auth } from "../auth/firebase";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const auth = getAuth(); // Initialize Firebase Auth
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use the modular method
      router.push("/dashboard"); // Redirect to login page after successful sign-up
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-3xl font-bold text-center">Sign Up</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 mt-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 mt-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full mt-6 p-3 bg-blue-600 text-white rounded"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-center">
        Already have an account?{" "}
        <a
          href="/login" // Redirect to the login page
          className="text-blue-600 hover:underline"
        >
          Log In
        </a>
      </p>
    </div>
  );
};

export default SignUp;
