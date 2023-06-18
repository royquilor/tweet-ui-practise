import Image from "next/image";
import Tweet from "./components/Tweet";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xl mx-auto border-t border-l border-r border-gray-200">
        <Tweet />
      </div>
    </main>
  );
}
