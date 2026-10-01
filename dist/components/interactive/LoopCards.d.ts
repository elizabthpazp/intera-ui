/**
 * LoopCards — carrusel infinito con control total y estética Intera.
 * Género "infinite moving cards": reimaginado como cinta con máscara de
 * desvanecido, pausa al hover, control de dirección/velocidad y drag nativo.
 * Implementación propia con CSS animation.
 */
export default function LoopCards({ items, darkMode, speed, direction, pauseOnHover, className, style, }: {
    items?: any[];
    darkMode?: boolean;
    speed?: number;
    direction?: string;
    pauseOnHover?: boolean;
    className?: string;
    style: any;
}): React.JSX.Element;
import React from "react";
