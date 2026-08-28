import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases con soporte para Tailwind merge.
 * Permite que el consumidor pase `className` y sobreescriba estilos sin conflictos de especificidad.
 * Ej: cn("px-8 py-3 bg-black", className) -> el className del usuario gana.
 */
export function cn() {
  for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }
  return twMerge(clsx(inputs));
}