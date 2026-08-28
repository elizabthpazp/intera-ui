export default CatLoader;
/**
 * @param {Object} props
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {number} [props.size=200] - tamaño en px
 */
declare function CatLoader({ className, style, size }: {
    className?: string;
    style?: React.CSSProperties;
    size?: number;
}): import("react").JSX.Element;
