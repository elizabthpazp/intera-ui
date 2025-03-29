/**
 * @param {Object} props
 * @param {boolean} [props.darkMode=false]
 * @param {any} [props.activities=null]
 * @param {string|null} [props.primaryButton=null]
 * @param {string|null} [props.secondaryButton=null]
 */
export default function Activities({ activities, primaryButton, secondaryButton, darkMode }: {
    darkMode?: boolean | undefined;
    activities?: any;
    primaryButton?: string | null | undefined;
    secondaryButton?: string | null | undefined;
}): any;
