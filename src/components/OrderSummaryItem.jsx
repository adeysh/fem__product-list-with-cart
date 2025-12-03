import { useMediaQuery } from "../hooks/useMediaQuery";

const OrderSummaryItem = ({ item }) => {
    const isLargeScreen = useMediaQuery("(width >= 64rem)");

    return (
        <div
            className={`flex w-full items-center justify-between ${isLargeScreen ? "gap-52" : ""}`}
        >
            <div className="flex items-center gap-4">
                <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="h-15 w-15 rounded-lg"
                />

                <div className="flex flex-col justify-between gap-2">
                    <p className="max-w-[140px] truncate font-semibold whitespace-nowrap text-rose-900">
                        {item.name}
                    </p>

                    <div className="flex gap-4">
                        <span className="font-semibold text-red">
                            {item.quantity}x
                        </span>{" "}
                        <span className="text-rose-500">
                            @ ${item.price.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            <span className="font-semibold text-rose-900">
                ${(item.quantity * item.price).toFixed(2)}
            </span>
        </div>
    );
};

export default OrderSummaryItem;
