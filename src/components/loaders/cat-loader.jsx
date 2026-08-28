import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {number} [props.size=200] - tamaño en px
 */
const CatLoader = ({ className = "", style, size = 200 }) => {
  return (
    <div className={cn("justify-center flex", className)} style={style}>
      <div className="cat" style={{ width: size, maxWidth: "20em" }}>
        <div className="cat__body"></div>
        <div className="cat__body"></div>
        <div className="cat__tail"></div>
        <div className="cat__head"></div>
      </div>
    </div>
  );
};

export default CatLoader;
