/**
 * PriceForge — calculadora de pricing que vende por ti.
 * Sliders de seats + toggle anual/mensual + add-ons con costo real
 * + desglose vivo + CTA con total. Resuelve la página de precios.
 */
export default function PriceForge({ darkMode, basePerSeat, onCheckout, summaryClassName, className, style, }: {
    darkMode?: boolean;
    basePerSeat?: number;
    onCheckout?: () => void;
    summaryClassName?: string;
    className?: string;
    style: any;
}): React.JSX.Element;
import React from "react";
