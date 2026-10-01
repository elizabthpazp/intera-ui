/**
 * SmartTable — tabla de datos que resuelve el admin de verdad.
 * Buscar + ordenar + filtrar por estado + seleccionar + paginar + exportar CSV.
 * Nada de hover decorativo: todo es acción (click / type) con resultado útil.
 *
 * @param {Array} [props.columns] - [{ key, label, sortable? }]
 * @param {Array} [props.data] - filas objeto
 * @param {boolean} [props.darkMode]
 * @param {number} [props.pageSize=5]
 * @param {function} [props.onSelectionChange]
 */
export default function SmartTable({ columns, data, darkMode, pageSize, onSelectionChange, className, style, }?: any[]): React.JSX.Element;
import React from "react";
