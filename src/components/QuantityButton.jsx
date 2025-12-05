// Button for increment / decrement quantity actions
const QuantityButton = ({ onClick, children, ariaLabel }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={ariaLabel}
            className="group flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-rose-50 p-0 hover:bg-rose-50 focus:outline-none focus-visible:bg-rose-50"
        >
            {children}
        </button>
    );
};

export default QuantityButton;
