/**
Primary action button
Used for: Confirm Order, Start New Order
 */
const PrimaryButton = ({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`cursor-pointer rounded-full bg-red p-3 text-rose-50 transition duration-300 ease-in-out hover:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${className} `}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
