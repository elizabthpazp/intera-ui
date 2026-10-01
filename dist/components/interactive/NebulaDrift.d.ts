/**
 * NebulaDrift — fondo aurora interactivo con toque Intera.
 * Concepto inspirado en "aurora backgrounds": blobs de color que derivan
 * lento + parallax que sigue al mouse. Implementación 100% original.
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.darkMode=false]
 * @param {number} [props.intensity=1] - 0.5 sutil / 1 normal / 1.6 intenso
 * @param {boolean} [props.showGrid=true] - rejilla tenue encima
 * @param {string} [props.className=""]
 */
export default function NebulaDrift({ children, darkMode, intensity, showGrid, hint, minHeight, className, style, }: {
    children?: React.ReactNode;
    darkMode?: boolean;
    intensity?: number;
    showGrid?: boolean;
    className?: string;
}): React.JSX.Element;
import React from "react";
