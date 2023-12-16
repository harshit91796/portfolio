// LineNumberedText.jsx
import React from 'react';

const LineNumberedText = ({ text }) => {
  const lines = text.split('\n');

  return (
    <div className="line-numbered-text">
      {lines.map((line, index) => (
        <div key={index} className="line">
          <span className="line-number">{index + 1}</span>
          {line}
        </div>
      ))}
    </div>
  );
};

export default LineNumberedText;
