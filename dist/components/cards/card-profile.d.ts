export default CardProfile;
/**
 * @param {Object} props
 * @param {boolean} [props.darkMode=false]
 * @param {string|null} [props.title=null]
 * @param {string|null} [props.subtitle=null]
 * @param {string|null} [props.description=null]
 * @param {string|null} [props.buttonLeftLabel=null]
 * @param {string|null} [props.buttonRightLabel=null]
 * @param {function} [props.onClickRight=() => {}]
 * @param {function} [props.onClickLeft=() => {}]
 * @param {string|null} [props.image=null]
 * @param {string} [props.className=""] - Clases para el contenedor externo
 * @param {string} [props.cardClassName=""] - Clases para la card interna
 * @param {React.CSSProperties} [props.style]
 */
declare function CardProfile({ darkMode, title, subtitle, description, buttonLeftLabel, buttonRightLabel, onClickRight, onClickLeft, image, className, cardClassName, style, }: {
    darkMode?: boolean;
    title?: string | null;
    subtitle?: string | null;
    description?: string | null;
    buttonLeftLabel?: string | null;
    buttonRightLabel?: string | null;
    onClickRight?: Function;
    onClickLeft?: Function;
    image?: string | null;
    className?: string;
    cardClassName?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from "react";
