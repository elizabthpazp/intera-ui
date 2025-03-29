"use client";
const TextMasking = ({ title= null, image= null }) => {
  return (
    <div className="imageMark" style={{backgroundImage: `url(${image??""})`}}> 
    <h1 className="text-6xl font-extrabold py-2">
      { title ?? "Text ♥️ ♥️  Masking" }  
    </h1>
  </div>
  );
};

export default TextMasking;
