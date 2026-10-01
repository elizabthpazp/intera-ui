/**
 * PulseGrid — rejilla de puntos reactiva con toque Intera.
 * Género "interactive grid background": los nodos se iluminan cerca
 * del cursor y el click genera una onda expansiva. Lógica propia.
 */
export default function PulseGrid({ darkMode, rows, cols, children, hint, minHeight, className, style, }: {
    darkMode?: boolean;
    rows?: number;
    cols?: number;
    children: any;
    hint?: string;
    minHeight?: number;
    className?: string;
    style: any;
}): React.JSX.Element;
import React from "react";
