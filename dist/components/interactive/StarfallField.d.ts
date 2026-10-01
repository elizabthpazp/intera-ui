/**
 * StarfallField — lluvia de meteoros interactiva con toque Intera.
 * Idea de género "meteor background" pero con física propia:
 * los meteoros caen en diagonal y al hacer click nace un burst.
 * 100% código original, sin copiar de terceros.
 */
export default function StarfallField({ children, darkMode, density, speed, burstOnClick, hint, minHeight, className, style, }: {
    children: any;
    darkMode?: boolean;
    density?: number;
    speed?: number;
    burstOnClick?: boolean;
    hint?: string;
    minHeight?: number;
    className?: string;
    style: any;
}): React.JSX.Element;
import React from "react";
