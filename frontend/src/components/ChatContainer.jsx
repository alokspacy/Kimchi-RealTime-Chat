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
  spicy: "bg-[linear-gradient(to_bottom,rgba(220,38,38,0.06),transparent)] bg-red-950/20 backdrop-blur-[1px]",
  matcha: "bg-[linear-gradient(to_bottom,rgba(16,185,129,0.05),transparent)] bg-emerald-950/15 backdrop-blur-[1px]",
  clay: "bg-[linear-gradient(to_bottom,rgba(180,83,9,0.04),transparent)] bg-amber-950/15 backdrop-blur-[1px]",
  ginger: "bg-[linear-gradient(to_bottom,rgba(245,158,11,0.03),transparent)] bg-yellow-950/15 backdrop-blur-[1px]",
  midnight: "bg-black/85 backdrop-blur-[2px]",
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
                      ? "bg-kimchi-600 text-white"
                      : "bg-slate-800 text-slate-200"
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
                          <CheckCheckIcon className="w-3.5 h-3.5 text-blue-400 font-bold" />
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
