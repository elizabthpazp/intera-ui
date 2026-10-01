export default function DropVault({ darkMode, maxMb, maxFiles, accept, onFilesChange, className, style, }: {
    darkMode?: boolean;
    maxMb?: number;
    maxFiles?: number;
    accept?: string[];
    onFilesChange?: () => void;
    className?: string;
    style: any;
}): React.JSX.Element;
import React from "react";
