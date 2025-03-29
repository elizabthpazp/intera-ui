"use client";
/**
 * @param {Object} props
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.image=null]
 */

import { useState, useEffect } from 'react';

const TextMasking = ({ title = null, image = null }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => setLoaded(true);
    }
  }, [image]);

  return (
    <div
      className="imageMark"
      style={{
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundSize: 'cover',
        objectFit: 'cover',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text', 
        color: 'transparent',
      }}
    >
      <h1 className="text-6xl font-extrabold py-2">
        {title ?? "Text ♥️ ♥️ Masking"}
      </h1>
    </div>
  );
};

export default TextMasking;

