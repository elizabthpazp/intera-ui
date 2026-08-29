/**
 * @param {Object} props
 * @param {number} [props.value=60] - 0-100
 * @param {number} [props.size=160] - Diámetro
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {boolean} [props.interactive=true] - Si true puedes arrastrar/click para cambiar valor
 * @param {function} [props.onChange=()=>{}]
 * @param {string} [props.label="Progress"]
 */
export default function LiquidProgress({ value, size, darkMode, className, style, interactive, onChange, label, }: {
    value?: number;
    size?: number;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
    interactive?: boolean;
    onChange?: Function;
    label?: string;
}): React.JSX.Element;
import React from "react";
