/**
 * @param {Object} props
 * @param {number} [props.min=0]
 * @param {number} [props.max=100]
 * @param {number} [props.defaultValue=50]
 * @param {function} [props.onChange=() => {}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function ElasticSlider({ min, max, defaultValue, onChange, darkMode, className, style, }: {
    min?: number;
    max?: number;
    defaultValue?: number;
    onChange?: Function;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from "react";
