import Message from "./Message";

export default function ChatWindow({ messages }) {
  return (
    <div className="h-96 overflow-y-auto mb-4 space-y-2">
      {messages.map((msg, i) => (
        <Message key={i} text={msg.text} from={msg.from} />
      ))}
    </div>
  );
}