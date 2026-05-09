export default function BackgroundEffects() {
  return (
    <>
      <div className="grid-bg"></div>

      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>

      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
    </>
  );
}