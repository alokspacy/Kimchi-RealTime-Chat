import KimchiIcon from "./KimchiIcon";
import { useChatStore } from "../store/useChatStore";

const NoChatHistoryPlaceholder = ({ name }) => {
  const { setMessageInputText } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 select-none">
      <div className="w-16 h-16 bg-gradient-to-br from-kimchi-500/20 to-kimchi-400/10 rounded-full flex items-center justify-center mb-5">
        <KimchiIcon className="size-8 text-kimchi-400" />
      </div>
      <h3 className="text-lg font-medium text-slate-200 mb-3">
        Start your conversation with {name}
      </h3>
      <div className="flex flex-col space-y-3 max-w-md mb-5">
        <p className="text-slate-400 text-sm">
          This is the beginning of your conversation. Send a message to start chatting!
        </p>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-kimchi-500/30 to-transparent mx-auto"></div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setMessageInputText("Hello!")}
          className="px-4 py-2 text-xs font-medium text-kimchi-300 bg-kimchi-500/10 rounded-full hover:bg-kimchi-500/20 transition-colors cursor-pointer"
        >
          👋 Say Hello
        </button>
        <button
          onClick={() => setMessageInputText("How are you?")}
          className="px-4 py-2 text-xs font-medium text-kimchi-300 bg-kimchi-500/10 rounded-full hover:bg-kimchi-500/20 transition-colors cursor-pointer"
        >
          🤝 How are you?
        </button>
        <button
          onClick={() => setMessageInputText("Let's meet up soon!")}
          className="px-4 py-2 text-xs font-medium text-kimchi-300 bg-kimchi-500/10 rounded-full hover:bg-kimchi-500/20 transition-colors cursor-pointer"
        >
          📅 Meet up soon?
        </button>
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;
