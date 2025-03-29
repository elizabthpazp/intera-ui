export default ButtonCard;
declare function ButtonCard({ principalButton, darkMode, title, description, primaryButton, secondaryButton, emailPlaceholder, passwordPlaceholder, notShowArrow, notShowCombobox, notShowForgot, combobox, forgot, onLogin, forgotLink, onSignUp }: {
    principalButton?: null | undefined;
    darkMode?: boolean | undefined;
    title?: null | undefined;
    description?: null | undefined;
    primaryButton?: null | undefined;
    secondaryButton?: null | undefined;
    emailPlaceholder?: null | undefined;
    passwordPlaceholder?: null | undefined;
    notShowArrow?: boolean | undefined;
    notShowCombobox?: boolean | undefined;
    notShowForgot?: boolean | undefined;
    combobox?: null | undefined;
    forgot?: null | undefined;
    onLogin?: (() => void) | undefined;
    forgotLink?: null | undefined;
    onSignUp?: (() => void) | undefined;
}): any;
