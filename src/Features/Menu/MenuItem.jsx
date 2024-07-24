/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { cart, deleteIcon } from "../../assets/index";
import {
  addItem,
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../Cart/cartSlice";

function MenuItem({ menu }) {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.cart);

  const currentItem = items.find((item) => item.id === menu.id);
  const quantity = currentItem ? currentItem.quantity : 0;

  const addToCart = () => {
    const menuItem = {
      ...menu,
      quantity: 1,
      totalPrice: menu.unitPrice,
    };
    dispatch(addItem(menuItem));
  };

  const decreaseQuantityHandler = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(menu.id));
    } else {
      dispatch(deleteItem(menu.id));
    }
  };

  const increaseQuantityHandler = () => {
    dispatch(increaseQuantity(menu.id));
  };

  const deleteItemHandler = () => {
    dispatch(deleteItem(menu.id));
  };

  return (
    <li className="menu text-golden w-full sm:w-[250px] rounded-md overflow-hidden flex sm:flex-col sm:min-h-[380px] flex-row h-[150px] hover:translate-y-[-10px] transition-all">
      <img
        src={menu.imageUrl}
        alt=""
        className="sm:w-full sm:h-60 object-cover h-100 w-50"
      />
      <div className="px-2 py-3 space-y-1 h-full flex flex-col flex-grow">
        <div className="flex-grow">
          <h1 className="font-bold text-lg">{menu.name}</h1>
          <p className="text-crimson sm:text-sm text-[14px]">
            {menu.ingredients.join(", ")}
          </p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <p className="font-semibold">{menu.unitPrice} $</p>
          {quantity > 0 ? (
            <div className="flex items-center gap-2">
              <button
                className="bg-golden px-3 py-1 md:py-2 md:px-4 font-bold font-base rounded-full block text-black"
                onClick={decreaseQuantityHandler}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className="bg-golden px-3 py-1 md:py-2 md:px-4 font-bold font-base rounded-full block text-black"
                onClick={increaseQuantityHandler}
              >
                +
              </button>
              <button
                className="bg-golden px-4 py-3 font-bold font-base rounded-full block text-black"
                onClick={deleteItemHandler}
              >
                <img
                  src={deleteIcon}
                  alt={menu.name}
                  className="object-contain h-[16px] w-[16px]"
                />
              </button>
            </div>
          ) : (
            <button
              className="bg-golden px-4 py-3 font-bold font-base rounded-full block text-black"
              onClick={addToCart}
            >
              <img
                src={cart}
                alt={menu.name}
                className="object-contain h-[16px] w-[16px]"
              />
            </button>
          )}
        </div>
      </div>
    </li>
  );
}


export default MenuItem