export default function CheckOut({ price }) {
    const tax = (price * 0.15).toFixed(2)
    const total = (parseFloat(price) + parseFloat(tax)).toFixed(2)
    return (
        <div className="checkOut">
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
