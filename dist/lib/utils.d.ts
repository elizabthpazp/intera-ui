/**
 * Combina clases con soporte para Tailwind merge.
 * Permite que el consumidor pase `className` y sobreescriba estilos sin conflictos de especificidad.
 * Ej: cn("px-8 py-3 bg-black", className) -> el className del usuario gana.
 */
export function cn(...inputs: any[]): string;
