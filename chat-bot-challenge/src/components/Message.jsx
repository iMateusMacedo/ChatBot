export default function Message({ text, from }) {
  const isUser = from === "user";

  return (
    <div
      className={`p-2 rounded-md w-fit max-w-[75%] ${
        isUser ? "ml-auto bg-blue-100" : "mr-auto bg-green-100"
      }`}
    >
      {text}
    </div>
  );
}