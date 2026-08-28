"use client";
import { cn } from "../../lib/utils";
/**
 * @param {Object} props
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.image=null]
 * @param {string} [props.className=""]
 * @param {string} [props.textClassName=""]
 * @param {React.CSSProperties} [props.style]
 */

const TextMasking = ({ title = null, image = null, className = "", textClassName = "", style }) => {
  return (
    <div className={cn("relative flex items-center justify-center py-10", className)} style={style}>
      <h1
        className={cn("text-7xl md:text-8xl font-black text-center uppercase tracking-tighter", textClassName)}
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
