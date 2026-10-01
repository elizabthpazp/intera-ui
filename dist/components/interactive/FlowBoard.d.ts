export default function FlowBoard({ darkMode, initial, onChange, className, style, }: {
    darkMode?: boolean;
    initial?: {
        id: string;
        col: string;
        title: string;
        tag: string;
    }[];
    onChange?: () => void;
    className?: string;
    style: any;
}): React.JSX.Element;
import React from "react";
