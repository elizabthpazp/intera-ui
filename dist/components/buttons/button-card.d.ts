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
 */
declare function ButtonCard({ principalButton, darkMode, title, description, primaryButton, secondaryButton, emailPlaceholder, passwordPlaceholder, notShowArrow, notShowCombobox, notShowForgot, combobox, forgot, onLogin, forgotLink, onSignUp }: {
    principalButton?: string | null | undefined;
    darkMode?: boolean | undefined;
    title?: string | null | undefined;
    description?: string | null | undefined;
    primaryButton?: string | null | undefined;
    secondaryButton?: string | null | undefined;
    emailPlaceholder?: string | null | undefined;
    passwordPlaceholder?: string | null | undefined;
    notShowArrow?: boolean | undefined;
    notShowCombobox?: boolean | undefined;
    notShowForgot?: boolean | undefined;
    combobox?: string | null | undefined;
    forgot?: string | null | undefined;
    onLogin?: Function | undefined;
    forgotLink?: string | null | undefined;
    onSignUp?: Function | undefined;
}): any;
