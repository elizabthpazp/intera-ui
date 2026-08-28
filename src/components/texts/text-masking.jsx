"use client";
/**
 * @param {Object} props
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.image=null]
 */

const TextMasking = ({ title = null, image = null }) => {
  return (
    <div className="relative flex items-center justify-center py-10">
      <h1
        className="text-7xl md:text-8xl font-black text-center uppercase tracking-tighter"
        style={{
          backgroundImage: `url(${image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {title ?? "Intera UI"}
      </h1>
    </div>
  );
};

export default TextMasking;
