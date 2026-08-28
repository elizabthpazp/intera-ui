/**
 * @param {Object} props
 * @param {Array} [props.tabs=[]] - Array of { id: string, label: string }
 * @param {string} [props.activeTab=""]
 * @param {function} [props.onChange=() => {}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function FluidTabs({ tabs, activeTab, onChange, darkMode, className, style, }: {
    tabs?: any[];
    activeTab?: string;
    onChange?: Function;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from "react";
