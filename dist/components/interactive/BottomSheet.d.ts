/**
 * @param {Object} props
 * @param {boolean} [props.open=false]
 * @param {function} [props.onOpenChange=()=>{}]
 * @param {ReactNode} [props.children]
 * @param {string} [props.title=""]
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {Array<number>} [props.snapPoints=[0.85]] - Alturas relativas (0-1) - se usa el primero como altura
 */
export default function BottomSheet({ open, onOpenChange, children, title, darkMode, className, style, snapPoints, }: {
    open?: boolean;
    onOpenChange?: Function;
    children?: ReactNode;
    title?: string;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
    snapPoints?: Array<number>;
}): React.JSX.Element;
export function BottomSheetTrigger({ onClick, darkMode, className, children }: {
    onClick: any;
    darkMode: any;
    className: any;
    children: any;
}): React.JSX.Element;
import React from "react";
