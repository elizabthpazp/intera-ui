export default TextMasking;
/**
 * @param {Object} props
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.image=null]
 * @param {string} [props.className=""]
 * @param {string} [props.textClassName=""]
 * @param {React.CSSProperties} [props.style]
 */
declare function TextMasking({ title, image, className, textClassName, style }: {
    title?: string | null;
    image?: string | null;
    className?: string;
    textClassName?: string;
    style?: React.CSSProperties;
}): import("react").JSX.Element;
