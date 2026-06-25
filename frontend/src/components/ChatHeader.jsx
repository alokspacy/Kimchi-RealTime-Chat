import { XIcon, PaletteIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const wallpaperOptions = [
  { id: "default", color: "bg-onggi-950" },
  { id: "spicy", color: "bg-red-950/80 border border-red-500/30" },
  { id: "matcha", color: "bg-emerald-950/80 border border-emerald-500/30" },
  { id: "clay", color: "bg-amber-950/70 border border-amber-600/20" },
  { id: "ginger", color: "bg-yellow-950/70 border border-yellow-500/20" },
  { id: "midnight", color: "bg-black border border-slate-800" }
];

function ChatHeader() {
  const { selectedUser, setSelectedUser, typingUsers, chatWallpaper, setChatWallpaper } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);
  const isTyping = typingUsers[selectedUser._id];
  const [showWallpaperMenu, setShowWallpaperMenu] = useState(false);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);

    // cleanup function
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div
      className="flex justify-between items-center bg-onggi-800/30 border-b
   border-onggi-800/25 max-h-[84px] px-6 flex-1 relative"
    >
      <div className="flex items-center space-x-3">
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
          </div>
        </div>

        <div>
          <h3 className="text-slate-200 font-medium">{selectedUser.fullName}</h3>
          {isTyping ? (
            <p className="text-sprout-400 text-sm font-semibold animate-pulse">typing...</p>
          ) : (
            <p className="text-slate-400 text-sm">{isOnline ? "Online" : "Offline"}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* WALLPAPER PALETTE DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setShowWallpaperMenu(!showWallpaperMenu)}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer hover:bg-onggi-800/40 ${
              showWallpaperMenu ? "text-kimchi-500" : "text-slate-400 hover:text-slate-200"
            }`}
            title="Chat wallpaper"
          >
            <PaletteIcon className="w-5 h-5" />
          </button>

          {showWallpaperMenu && (
            <div className="absolute right-0 mt-3 w-56 bg-onggi-800 border border-onggi-700/60 rounded-xl shadow-2xl z-50 p-3 space-y-2">
              <h4 className="text-slate-200 text-xs font-semibold px-1">Chat Wallpaper</h4>
              <div className="grid grid-cols-3 gap-2">
                {wallpaperOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setChatWallpaper(opt.id);
                      setShowWallpaperMenu(false);
                    }}
                    className={`flex flex-col items-center justify-center p-1.5 rounded-lg border transition-all ${
                      chatWallpaper === opt.id
                        ? "border-kimchi-500 bg-kimchi-500/10"
                        : "border-onggi-700/50 bg-onggi-900/40 hover:border-slate-500"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-md mb-1 shadow ${opt.color}`} />
                    <span className="text-[10px] text-slate-300 font-medium capitalize">
                      {opt.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <button onClick={() => setSelectedUser(null)}>
          <XIcon className="w-5 h-5 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
export default ChatHeader;
