const ChatMessage = ({ message, isUser }) => (
  <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
    <div
      className={`p-3 rounded-lg max-w-xs ${
        isUser ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-800"
      }`}
    >
      {message.content}
    </div>
  </div>
);

export default ChatMessage;
