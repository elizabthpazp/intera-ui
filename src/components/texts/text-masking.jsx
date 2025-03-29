"use client";
/**
 * @param {Object} props
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.image=null]
 */

const TextMasking = ({ title= null, image= null }) => {
  return (
    <div className="imageMark" style={{backgroundImage: `url(${image??""})`, backgroundSize:'cover', backgroundClip: 'text', color:'transparent'}}> 
    <h1 className="text-6xl font-extrabold py-2">
      { title ?? "Text ♥️ ♥️  Masking" }  
    </h1>
  </div>
  );
};

export default TextMasking;
