import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};
const ChartPage = ({ params: { id } }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chat */}
      <Chat chatId={id} />
      {/* Chat Input */}
      <ChatInput chatId={id} />
    </div>
  );
};

export default ChartPage;
