/**
 * BloomText — revelado de texto por palabras con blur + resorte.
 * Género "text generate / flip words": reinterpretación Intera —
 * cada palabra florece con blur→nítido, es hovereable y re-jugable.
 * Click en la palabra la hace "saltar". 100% original.
 */
export default function BloomText({ text, darkMode, highlightWords, highlightClass, textClassName, showReplay, className, style, }: {
    text?: string;
    darkMode?: boolean;
    highlightWords?: string[];
    highlightClass?: string;
    textClassName?: string;
    showReplay?: boolean;
    className?: string;
    style: any;
}): React.JSX.Element;
import React from "react";
