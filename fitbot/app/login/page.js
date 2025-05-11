"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase Auth method
import { useRouter } from "next/navigation"; // Import router for navigation
import { auth } from "../auth/firebase"; // Import auth from your custom firebase.js file

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the login process
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use the modular method from firebase/auth
      router.push("/dashboard"); // Redirect to dashboard after successful login
    } catch (error) {
      setError(error.message); // Display error message
    } finally {
      setLoading(false); // Set loading to false once the request is complete
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-700">Login</h1>
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 mt-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 mt-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className={`w-full mt-6 p-3 ${
            loading ? "bg-gray-400" : "bg-blue-600"
          } text-white rounded`}
          disabled={loading} // Disable the button while loading
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Sign Up Link */}
      <p className="mt-6 text-center text-gray-600">
        Don't have an account?{" "}
        <a
          href="/signup" // Redirect to the sign-up page
          className="text-blue-600 hover:underline"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
