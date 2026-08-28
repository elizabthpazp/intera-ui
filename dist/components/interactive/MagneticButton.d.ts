/**
 * @param {Object} props
 * @param {ReactNode} props.children
 * @param {function} [props.onClick=() => {}]
 * @param {number} [props.strength=0.5] - How strong the magnetic pull is (0 to 1)
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function MagneticButton({ children, onClick, strength, darkMode, className, style, }: {
    children: ReactNode;
    onClick?: Function;
    strength?: number;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from "react";
