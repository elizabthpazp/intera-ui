/**
 * @param {Object} props
 * @param {Array} [props.items=[]] - Array de { id, label, icon?, shortcut?, onSelect }
 * @param {boolean} [props.open=false] - Controlado externo
 * @param {function} [props.onOpenChange=()=>{}]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.placeholder="Type a command..."]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 */
export default function CommandPalette({ items, open: controlledOpen, onOpenChange, darkMode, placeholder, className, style, }: {
    items?: any[];
    open?: boolean;
    onOpenChange?: Function;
    darkMode?: boolean;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from "react";
