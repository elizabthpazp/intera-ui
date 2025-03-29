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
 */
declare function CardProfile({ darkMode, title, subtitle, description, buttonLeftLabel, buttonRightLabel, onClickRight, onClickLeft, image }: {
    darkMode?: boolean | undefined;
    title?: string | null | undefined;
    subtitle?: string | null | undefined;
    description?: string | null | undefined;
    buttonLeftLabel?: string | null | undefined;
    buttonRightLabel?: string | null | undefined;
    onClickRight?: Function | undefined;
    onClickLeft?: Function | undefined;
    image?: string | null | undefined;
}): any;
