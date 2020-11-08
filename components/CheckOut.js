export default function CheckOut({ price, store }) {
    const tax = (price * 0.15).toFixed(2)
    const total = (parseFloat(price) + parseFloat(tax)).toFixed(2)

    return (
        <div className="checkOut">
            <div className="location">
                <span>
                    <b>Pick up at:</b>
                </span>
                {store.sub ? (
                    <>
                        <span className="sub">{store.sub}</span>
                        <address>{store.address}</address>
                        <address>{store.address2}</address>
                    </>
                ) : (
                    <span>No location selected</span>
                )}
            </div>

            <span className="subtotal">
                <b>Subtotal:</b> {price}
            </span>
            <span className="tax">
                <b>Tax:</b> {tax}
            </span>
            <span className="total">
                <b>Total:</b> <span className="price">${total}</span>
            </span>
            <button className="checkOutButton">Check Out</button>
        </div>
    )
}
