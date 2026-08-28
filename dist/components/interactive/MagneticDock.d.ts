/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array of { icon: ReactNode, label: string, onClick: func }
 * @param {number} [props.distance=150] - Distance for magnification effect
 * @param {number} [props.magnification=80] - Maximum size of icons
 * @param {number} [props.baseSize=40] - Original size of icons
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function MagneticDock({ items, distance, magnification, baseSize, darkMode, className, style, }: {
    items?: any[];
    distance?: number;
    magnification?: number;
    baseSize?: number;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from "react";
