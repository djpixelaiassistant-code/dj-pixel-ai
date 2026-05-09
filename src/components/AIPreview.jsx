import preview1 from "../assets/preview1.webp";
import preview2 from "../assets/preview2.webp";
import preview3 from "../assets/preview3.webp";

export default function AIPreview({ preview }) {

  const previewMap = {
    dashboard: preview1,
    ecommerce: preview2,
    portfolio: preview3,
  };

  return (
    <div className="preview-card">

      <div className="scan-line"></div>

      <img
        src={previewMap[preview]}
        alt="preview"
        className="preview-image"
      />

      <div className="preview-overlay">
        <p>AI Generating Design...</p>
      </div>

    </div>
  );
}