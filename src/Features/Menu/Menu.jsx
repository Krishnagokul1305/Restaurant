import { Link, useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { formatCurrency } from "../../utils/helpers";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
// import NavBar from "../../ui/NavBar";

function Menu() {
  const data = useLoaderData();
  console.log(data);
  const { items } = useSelector((store) => store.cart);
  const totolQuantity = items.reduce(
    (acc, current) => current.quantity + acc,
    0
  );
  const totolPrice = items.reduce(
    (acc, current) => current.totalPrice + acc,
    0
  );
  console.log(totolQuantity);
  return (
    <div className="h-auto bg-black mx-auto relative pb-20">
      <ul className="flex flex-wrap gap-10 py-5 px-5 justify-center">
        {data.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </ul>
      {totolQuantity != 0 && (
        <motion.div className="flex justify-between items-center gap-5 navigation fixed bottom-5 py-3 px-6 left-1/2 transform -translate-x-1/2 rounded-full w-[90%] sm:w-fit">
          <div className="text-golden flex gap-5">
            <p className="font-bold text-lg">{totolQuantity} Pizzas</p>
            <p className="font-bold text-lg">{formatCurrency(totolPrice)}</p>
          </div>
          <Link
            className="bg-golden px-4 py-3 font-bold rounded-full block text-black md:px-7"
            to={"/cart"}
          >
            Go to Car
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export async function loader() {
  const data = await getMenu();
  return data;
}

export default Menu;

// animation for the floating navigation
// initial={{
//   opacity: 0,
//   y: 100,
// }}
// animate={{
//   opacity: 1,
//   y: 0,
// }}
// transition={{
//   type: "spring",
//   stiffness: 100,
// }}
