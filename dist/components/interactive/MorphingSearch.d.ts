/**
 * @param {Object} props
 * @param {string} [props.placeholder="Search..."]
 * @param {function} [props.onSearch=() => {}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function MorphingSearch({ placeholder, onSearch, darkMode, className, style, }: {
    placeholder?: string;
    onSearch?: Function;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from "react";
