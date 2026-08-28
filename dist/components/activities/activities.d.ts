/**
 * @param {Object} props
 * @param {boolean} [props.darkMode=false]
 * @param {any} [props.activities=null]
 * @param {string|null} [props.primaryButton=null]
 * @param {string|null} [props.secondaryButton=null]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function Activities({ activities, primaryButton, secondaryButton, darkMode, className, style, }: {
    darkMode?: boolean;
    activities?: any;
    primaryButton?: string | null;
    secondaryButton?: string | null;
    className?: string;
    style?: React.CSSProperties;
}): import("react").JSX.Element;
