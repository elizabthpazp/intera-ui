/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, title, content, colSpan?, rowSpan?, color? }
 * @param {boolean} [props.draggable=true]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function BentoGrid({ items: initial, draggable, darkMode, className, style, }: {
    items?: any[];
    draggable?: boolean;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from "react";
