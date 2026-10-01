/**
 * FluxBorder — contenedor con borde cónico animado y glow que sigue al mouse.
 * Género "moving / glowing border": reinterpretación Intera con doble anillo,
 * esquinas extra-redondeadas y aceleración al hover. Código original.
 */
export default function FluxBorder({ children, darkMode, radius, glow, speed, className, style, }: {
    children: any;
    darkMode?: boolean;
    radius?: string;
    glow?: string;
    speed?: number;
    className?: string;
    style: any;
}): React.JSX.Element;
import React from "react";
