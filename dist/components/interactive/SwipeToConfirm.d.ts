/**
 * @param {Object} props
 * @param {string} [props.label="Slide to confirm"]
 * @param {string} [props.successLabel="Confirmed"]
 * @param {function} [props.onConfirm=() => {}] - Llamado al confirmar. La librería NO hace alert por defecto, delega al consumidor.
 * @param {function} [props.onReset=() => {}] - Llamado al resetear
 * @param {boolean} [props.darkMode=false]
 * @param {string} [props.className=""]
 * @param {React.CSSProperties} [props.style]
 * @param {number|null} [props.resetDelay=null] - Ms para auto-reset tras confirmar. null = se queda confirmado hasta reset manual.
 * @param {boolean} [props.disabled=false]
 * @param {boolean} [props.allowReset=true] - Si true muestra botón de reset tras confirmar
 */
export default function SwipeToConfirm({ label, successLabel, onConfirm, onReset, darkMode, className, style, resetDelay, disabled, allowReset, }: {
    label?: string;
    successLabel?: string;
    onConfirm?: Function;
    onReset?: Function;
    darkMode?: boolean;
    className?: string;
    style?: React.CSSProperties;
    resetDelay?: number | null;
    disabled?: boolean;
    allowReset?: boolean;
}): React.JSX.Element;
import React from "react";
