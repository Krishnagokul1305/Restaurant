import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import { formatCurrency } from "../../utils/helpers";

function Cart() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { items } = useSelector((store) => store.cart);
  const totolQuantity = items.reduce(
    (acc, current) => current.quantity + acc,
    0
  );
  const totolPrice = items.reduce(
    (acc, current) => current.totalPrice + acc,
    0
  );
  return (
    <div className="h-screen bg-black p-5 md:px-20">
      <Link className="text-golden underline" to="/menu">
        &larr; Back to Menu
      </Link>
      <h2 className="mt-7 text-xl font-bold text-golden">
        Your cart, {user || ""}
      </h2>

      {items.length ? (
        <>
          <ul className="mt-2 divide-y divide-crimson border-b">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="flex items-center gap-5 my-5">
            <p className="text-golden font-bold">
              Total Pizzas : {totolQuantity}
            </p>
            <p className="text-golden font-bold">
              Total Price : {formatCurrency(totolPrice)}
            </p>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <button
              className="bg-crimson px-4 py-3 font-bold  rounded-full block text-black"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
            <Link
              className="bg-golden px-4 py-3 font-bold  rounded-full block text-black"
              to="/order/new"
            >
              Order now
            </Link>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
