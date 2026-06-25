import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";
import { CheckIcon, CheckCheckIcon } from "lucide-react";

const wallpaperBgStyles = {
  default: {},
  tea: {
    backgroundImage: "linear-gradient(to bottom, rgba(6, 78, 59, 0.93), rgba(6, 78, 59, 0.96)), url('/wallpapers/jeju_tea.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  blossom: {
    backgroundImage: "linear-gradient(to bottom, rgba(55, 15, 25, 0.92), rgba(55, 15, 25, 0.96)), url('/wallpapers/cherry_blossom.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  mist: {
    backgroundImage: "linear-gradient(to bottom, rgba(13, 27, 30, 0.92), rgba(13, 27, 30, 0.96)), url('/wallpapers/misty_forest.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  sky: {
    backgroundImage: "linear-gradient(to bottom, rgba(10, 25, 47, 0.92), rgba(10, 25, 47, 0.96)), url('/wallpapers/jeju_breeze.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  orchid: {
    backgroundImage: "linear-gradient(to bottom, rgba(30, 10, 45, 0.92), rgba(30, 10, 45, 0.96)), url('/wallpapers/orchid_valley.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
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
      <div
        className="flex-1 px-6 overflow-y-auto py-8 transition-all duration-300"
        style={wallpaperBgStyles[chatWallpaper] || wallpaperBgStyles.default}
      >
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
