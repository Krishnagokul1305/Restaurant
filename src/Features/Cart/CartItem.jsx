import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const dispatch=useDispatch()
  return (
    <li className="py-3 flex items-center justify-between text-crimson">
      <div className="space-y-2">
        <p className="mb-1 sm:mb-0 font-bold ">
          {item.quantity}&times; {item.name}
        </p>
        <p className="hidden md:block text-sm ms-10">
          {item.ingredients.join(", ") || "tomato , mozzarella , basil"}
        </p>
      </div>
      <div className="flex items-center gap-4 md:gap-10">
        <p className="text-sm font-bold">{formatCurrency(item.price || 50)}</p>

        <button className="bg-golden px-4 py-2 font-bold rounded-full block text-black" onClick={()=>dispatch(deleteItem(item.id))}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default CartItem;
