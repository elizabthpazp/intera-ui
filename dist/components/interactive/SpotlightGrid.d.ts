/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, title, content, icon? }
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function SpotlightGrid({ items, darkMode, className, style, }: {
    items?: any[];
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from "react";
