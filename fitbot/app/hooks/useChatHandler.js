import { useState } from "react";
import { getOpenAiApiResponse } from "./getOpenAiApiResponse";

export const useChatHandler = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);

    const aiResponse = await getOpenAiApiResponse(input);
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: aiResponse },
    ]);
    setLoading(false);
    setInput("");
  };

  return { messages, input, handleInputChange, handleSubmit, loading };
};
