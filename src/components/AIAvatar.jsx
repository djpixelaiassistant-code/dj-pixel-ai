import avatar from "../assets/ai-avatar.webp";

export default function AIAvatar() {
  return (
    <div className="avatar-container">
      <div className="avatar-glow"></div>

      <img
        src={avatar}
        alt="AI Avatar"
        className="ai-avatar"
      />
    </div>
  );
}