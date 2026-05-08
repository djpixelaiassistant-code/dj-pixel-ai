import React from "react";

const suggestions = [
  "Build AI Website",
  "Create 3D UI",
  "Voice Assistant",
  "Generate Design",
];

const SuggestionChips = () => {
  return (
    <div className="suggestion-container">

      {suggestions.map((item, index) => (
        <button key={index} className="suggestion-chip">
          {item}
        </button>
      ))}

    </div>
  );
};

export default SuggestionChips;