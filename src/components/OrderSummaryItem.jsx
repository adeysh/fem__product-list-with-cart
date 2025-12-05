import { useMediaQuery } from "../hooks/useMediaQuery";

const OrderSummaryItem = ({ item }) => {
    const isLargeScreen = useMediaQuery("(width >= 64rem)");
    const totalPrice = (item.quantity * item.price).toFixed(2);

    return (
        <div
            className={`flex w-full items-center justify-between ${isLargeScreen ? "gap-52" : ""}`}
        >
            {/* LEFT SIDE: Image + Info */}
            <div className="flex items-center gap-4">
                <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="h-15 w-15 rounded-lg object-cover"
                />

                <div className="flex flex-col justify-between gap-2">
                    {/* Product Name with truncation */}
                    <p
                        className={`truncate font-semibold text-rose-900 ${isLargeScreen ? "" : "max-w-item-name"}`}
                    >
                        {item.name}
                    </p>

                    {/* Quantity & Unit Price */}
                    <div className="flex gap-4 text-sm">
                        <span className="font-semibold text-red">
                            {item.quantity}x
                        </span>{" "}
                        <span className="text-rose-500">
                            @ ${item.price.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Total Price */}
            <span className="font-semibold text-rose-900">${totalPrice}</span>
        </div>
    );
};

export default OrderSummaryItem;
