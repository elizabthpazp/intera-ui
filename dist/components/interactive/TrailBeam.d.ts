/**
 * TrailBeam — línea de progreso de scroll con pulso luminoso.
 * Género "tracing beam / timeline": versión Intera minimal —
 * track tenue + beam con gradiente + orbe que viaja con el scroll.
 * Pensado para envolver storytelling / features. Código original.
 */
export default function TrailBeam({ children, steps, darkMode, accent, cardClassName, className, style, }: {
    children: any;
    steps?: any[];
    darkMode?: boolean;
    accent?: string;
    cardClassName?: string;
    className?: string;
    style: any;
}): React.JSX.Element;
import React from "react";
