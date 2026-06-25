import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";
import { CheckIcon, CheckCheckIcon } from "lucide-react";

const wallpaperBgClasses = {
  default: "bg-transparent",
  tea: "bg-[linear-gradient(to_bottom,rgba(16,185,129,0.08),transparent)] bg-emerald-950/20 backdrop-blur-[1px]",
  blossom: "bg-[linear-gradient(to_bottom,rgba(244,143,177,0.06),transparent)] bg-rose-950/20 backdrop-blur-[1px]",
  mist: "bg-[linear-gradient(to_bottom,rgba(20,184,166,0.05),transparent)] bg-teal-950/20 backdrop-blur-[1px]",
  sky: "bg-[linear-gradient(to_bottom,rgba(14,165,233,0.05),transparent)] bg-sky-950/20 backdrop-blur-[1px]",
  orchid: "bg-[linear-gradient(to_bottom,rgba(139,92,246,0.05),transparent)] bg-violet-950/20 backdrop-blur-[1px]",
};

function ChatContainer() {
  const {
    selectedUser,
    getMessagesByUserId,
    messages,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeFromMessages,
    chatWallpaper,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessagesByUserId(selectedUser._id);
    subscribeToMessages();

    // clean up
    return () => unsubscribeFromMessages();
  }, [selectedUser, getMessagesByUserId, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <ChatHeader />
      <div className={`flex-1 px-6 overflow-y-auto py-8 transition-colors duration-300 ${wallpaperBgClasses[chatWallpaper] || wallpaperBgClasses.default}`}>
        {messages.length > 0 && !isMessagesLoading ? (
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`chat ${msg.senderId === authUser._id ? "chat-end" : "chat-start"}`}
              >
                <div
                  className={`chat-bubble relative ${
                    msg.senderId === authUser._id
                      ? "bg-mint-600 text-white"
                      : "bg-slate-800/80 text-slate-200"
                  }`}
                >
                  {msg.image && (
                    <img src={msg.image} alt="Shared" className="rounded-lg h-48 object-cover" />
                  )}
                  {msg.text && <p className="mt-2">{msg.text}</p>}
                  
                  <div className="text-[10px] mt-2 opacity-75 flex items-center justify-end gap-1 select-none">
                    <span>
                      {new Date(msg.createdAt).toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    {msg.senderId === authUser._id && (
                      <span className="ml-1">
                        {msg.seen ? (
                          <CheckCheckIcon className="w-3.5 h-3.5 text-sky-400 font-bold" />
                        ) : (
                          <CheckIcon className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {/* 👇 scroll target */}
            <div ref={messageEndRef} />
          </div>
        ) : isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>

      <MessageInput />
    </>
  );
}

export default ChatContainer;
