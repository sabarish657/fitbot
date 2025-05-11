"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import firebaseConfig from "../auth/firebase";
import { useChatHandler } from "../hooks/useChatHandler"
import ChatMessage from "../components/ChatMessage";

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const Dashboard = () => {
  const router = useRouter();
  const auth = getAuth();
  const { messages, input, handleInputChange, handleSubmit, loading } =
    useChatHandler();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  const handleDownload = () => {
    const chatContent = messages
      .map(
        (message) =>
          `${message.role === "user" ? "User" : "AI"}: ${message.content}`
      )
      .join("\n");

    const blob = new Blob([chatContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "chat-conversation.txt";
    link.click();
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <button onClick={() => router.push("/")} className="text-blue-600 mb-4">
        ⬅ Back
      </button>
      <h1 className="text-3xl font-bold text-center mb-6">
        Fitness Chat with AI
      </h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg h-80 overflow-y-scroll">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
            isUser={message.role === "user"}
          />
        ))}
        {loading && (
          <ChatMessage message={{ content: "Typing..." }} isUser={false} />
        )}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about fitness..."
          className="w-full p-3 border border-gray-300 rounded-l-lg"
        />
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded-r-lg"
          disabled={loading}
        >
          Send
        </button>
      </form>
      <button
        onClick={handleDownload}
        className="mt-4 p-3 bg-green-600 text-white rounded"
      >
        Download Conversation
      </button>
      <button
        onClick={handleLogout}
        className="mt-2 p-3 bg-red-600 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
