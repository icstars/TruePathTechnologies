import ChatBot from "../../widgets/chatBot/ChatBot";
import styles from "./Chat.module.css";

export default function Chat() {
  return (
    <div className={styles.chatBox}>
      <ChatBot />
    </div>
  );
}
