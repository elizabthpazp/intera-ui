/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, icon, label, onClick, color? }
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {number} [props.radius=90] - Radio órbita
 */
export default function OrbitalMenu({ items, darkMode, className, style, radius, }: {
    items?: any[];
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
    radius?: number;
}): React.JSX.Element;
import React from "react";
