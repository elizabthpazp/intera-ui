export default ButtonCard;
/**
 * @param {Object} props
 * @param {string | null} [props.principalButton=null]
 * @param {boolean} [props.darkMode=false]
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.description=null]
 * @param {string | null} [props.primaryButton=null]
 * @param {string | null} [props.secondaryButton=null]
 * @param {string | null} [props.emailPlaceholder=null]
 * @param {string | null} [props.passwordPlaceholder=null]
 * @param {boolean} [props.notShowArrow=false]
 * @param {boolean} [props.notShowCombobox=false]
 * @param {boolean} [props.notShowForgot=false]
 * @param {string | null} [props.combobox=null]
 * @param {string | null} [props.forgot=null]
 * @param {function} [props.onLogin=() => {}]
 * @param {string | null} [props.forgotLink=null]
 * @param {function} [props.onSignUp=() => {}]
 * @param {string} [props.className=""] - Clases extra para el contenedor raíz (merge con cn)
 * @param {string} [props.triggerClassName=""] - Clases extra para el botón trigger
 * @param {string} [props.cardClassName=""] - Clases extra para la card desplegable
 * @param {React.CSSProperties} [props.style] - Estilos inline raíz
 */
declare function ButtonCard({ principalButton, darkMode, title, description, primaryButton, secondaryButton, emailPlaceholder, passwordPlaceholder, notShowArrow, notShowCombobox, notShowForgot, combobox, forgot, onLogin, forgotLink, onSignUp, className, triggerClassName, cardClassName, style, }: {
    principalButton?: string | null;
    darkMode?: boolean;
    title?: string | null;
    description?: string | null;
    primaryButton?: string | null;
    secondaryButton?: string | null;
    emailPlaceholder?: string | null;
    passwordPlaceholder?: string | null;
    notShowArrow?: boolean;
    notShowCombobox?: boolean;
    notShowForgot?: boolean;
    combobox?: string | null;
    forgot?: string | null;
    onLogin?: Function;
    forgotLink?: string | null;
    onSignUp?: Function;
    className?: string;
    triggerClassName?: string;
    cardClassName?: string;
    style?: React.CSSProperties;
}): React.JSX.Element;
import React from 'react';
