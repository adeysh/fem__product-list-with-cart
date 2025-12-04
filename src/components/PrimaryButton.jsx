const PrimaryButton = ({ children, onClick, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="transition-filter cursor-pointer rounded-full bg-red p-3 text-rose-50 duration-300 hover:bg-red hover:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 focus-visible:brightness-90"
        >
            {children}
        </button>
    );
};

export default PrimaryButton;
