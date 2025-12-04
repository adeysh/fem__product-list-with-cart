import React from "react";

const QuantityButton = ({ onClick, children }) => {
    return (
        <button
            className="group flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-rose-50 p-0 hover:bg-rose-50 focus:outline-none focus-visible:bg-rose-50"
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default QuantityButton;
