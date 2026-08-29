/**
 * @param {Object} props
 * @param {string} [props.before] - URL imagen before
 * @param {string} [props.after] - URL imagen after
 * @param {string} [props.beforeLabel="Before"]
 * @param {string} [props.afterLabel="After"]
 * @param {number} [props.defaultPosition=50] - 0-100
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function ImageCompare({ before, after, beforeLabel, afterLabel, defaultPosition, darkMode, className, style, }: {
    before?: string;
    after?: string;
    beforeLabel?: string;
    afterLabel?: string;
    defaultPosition?: number;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from "react";
