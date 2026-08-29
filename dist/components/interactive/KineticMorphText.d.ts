/**
 * @param {Object} props
 * @param {Array<string>} [props.texts=[]] - Frases a morfar
 * @param {number} [props.interval=2500] - Ms entre cambios
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {string} [props.variant="blur"] - blur | slide | scale
 */
export default function KineticMorphText({ texts, interval, darkMode, className, style, variant, }: {
    texts?: Array<string>;
    interval?: number;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
    variant?: string;
}): React.JSX.Element;
import React from "react";
