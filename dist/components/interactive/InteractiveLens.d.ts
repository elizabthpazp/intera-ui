/**
 * @param {Object} props
 * @param {ReactNode} props.children - Content to be revealed
 * @param {ReactNode} props.background - Background content (usually blurred or darkened)
 * @param {number} [props.size=200] - Lens size
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function InteractiveLens({ children, background, size, darkMode, className, style, }: {
    children: ReactNode;
    background: ReactNode;
    size?: number;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from "react";
