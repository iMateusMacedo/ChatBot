import { useState, useRef } from "react";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import "./App.css";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [buffer, setBuffer] = useState([]);
  const timer = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: `Usuário: ${input}`, from: "user" }];
    setMessages(newMessages);

    const newBuffer = [...buffer, input];
    setBuffer(newBuffer);
    setInput("");

    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      const grouped = newBuffer.join("\n");
      setMessages((prev) => [...prev, { text: `Bot: ${grouped}`, from: "bot" }]);
      setBuffer([]);
      timer.current = null;
    }, 5000);
  };

  return (
    <div className="app-container">
      <div className="chat-box">
        <h1 className="chat-title">Echo Chatbot</h1>
        <ChatWindow messages={messages} />
        <MessageInput input={input} setInput={setInput} handleSend={handleSend} />
      </div>
    </div>
  );
}