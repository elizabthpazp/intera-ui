"use client";
/**
 * @param {Object} props
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.image=null]
 */

const TextMasking = ({ title = null, image = null }) => {
  return (
    <div className="relative imageMark">
      <h1
        className="text-6xl font-extrabold py-2 relative z-10 text-transparent"
        style={{
          backgroundImage: `url(${image ?? ""})`,
          backgroundSize: "cover",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          WebkitMaskImage: `url(${image ?? ""})`,
          maskImage: `url(${image ?? ""})`,
          WebkitMaskSize: "cover",
          maskSize: "cover",
        }}
      >
        {title ?? "Text ♥️ ♥️ Masking"}
      </h1>
    </div>
  );
};

export default TextMasking;
