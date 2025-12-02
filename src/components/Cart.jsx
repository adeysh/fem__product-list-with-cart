const Cart = () => {
    return (
        <section className="flex flex-col gap-8 rounded-xl bg-rose-50 px-6 py-8">
            <h2 className="text-2xl font-bold text-red">
                Your Cart (!-- Quantity --)
            </h2>
            <div className="flex flex-col items-center gap-2">
                <img
                    src="/assets/images/illustration-empty-cart.svg"
                    alt="Cake slice"
                />
                <p className="text-base font-semibold text-rose-500">
                    Your added items will appear here
                </p>
            </div>
        </section>
    );
};

export default Cart;
