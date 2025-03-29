/**
 * @param {Object} props
 * @param {string|null} [props.message=null]
 * @param {string} [props.primaryColor="#ff7d6d"]
 * @param {string} [props.secondaryColor="#ffb74a"]
 * @param {string} [props.secondaryAccentColor="rgba(255, 206, 84, 1)"]
 * @param {string} [props.tertiaryColor="#ff8168"]
 * @param {string} [props.accentColor="#ff4149"]
 * @param {string} [props.shadowColor="#dd4b4c"]
 * @param {string} [props.textColor="#302E2EFF"]
 * @param {string} [props.containerColor="#ffa69f"]
 */
export default function GiftBox({ message, primaryColor, secondaryColor, secondaryAccentColor, tertiaryColor, accentColor, shadowColor, textColor, containerColor }: {
    message?: string | null | undefined;
    primaryColor?: string | undefined;
    secondaryColor?: string | undefined;
    secondaryAccentColor?: string | undefined;
    tertiaryColor?: string | undefined;
    accentColor?: string | undefined;
    shadowColor?: string | undefined;
    textColor?: string | undefined;
    containerColor?: string | undefined;
}): any;
