import { useChatStore } from "../store/useChatStore";

import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser, isMobileSidebarOpen, setMobileSidebarOpen } = useChatStore();

  return (
    <div className="relative w-full max-w-6xl h-[calc(100vh-2rem)] md:h-[85vh] md:max-h-[820px]">
      <BorderAnimatedContainer>
        {/* BACKDROP FOR MOBILE SIDEBAR DRAWER */}
        {selectedUser && isMobileSidebarOpen && (
          <div
            className="absolute inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 cursor-pointer"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* LEFT SIDE (Sidebar list / Sliding Drawer on Mobile) */}
        <div
          className={`
            flex flex-col border-r border-forest-800/20 transition-transform duration-300 ease-in-out
            md:static md:w-80 md:translate-x-0 md:flex md:bg-forest-800/40 md:backdrop-blur-sm
            ${
              selectedUser
                ? `absolute top-0 bottom-0 left-0 z-50 w-[280px] sm:w-80 bg-forest-950/95 backdrop-blur-md shadow-2xl ${
                    isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
                  }`
                : "w-full flex"
            }
          `}
        >
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE (Chat Pane / Placeholder) */}
        <div className={`flex-1 flex flex-col bg-forest-900/45 backdrop-blur-sm transition-all duration-300 ${!selectedUser ? "hidden md:flex" : "flex"}`}>
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}
export default ChatPage;
