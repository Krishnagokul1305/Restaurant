import { useSelector } from "react-redux";
import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { getAddress } from "../../services/apiGeocoding";
import { createOrder } from "../../services/apiRestaurant";

function CreateOrder() {
  const { user } = useSelector((store) => store.user);
  const { items } = useSelector((store) => store.cart);
  // const address = useLoaderData(); // If you need address data

  return (
    <div className="h-screen text-golden px-5 py-40">
      <div className="md:max-w-7xl w-full mx-auto">
        <h1 className="font-bold text-2xl md:mb-4">Order Now</h1>
        <Form method="post" className="flex flex-col gap-3 md:gap-7">
          <div className="flex flex-col gap-2 mt-5 md:flex-row md:items-center">
            <label htmlFor="name" className="font-bold text-lg md:basis-40">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user}
              className="rounded-full border border-stone-200 px-4 text-sm md:text-lg transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-golden md:px-6 py-3 md:flex-grow text-black"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5 md:flex-row md:items-center">
            <label htmlFor="phone" className="font-bold text-lg md:basis-40">
              Phone no
            </label>
            <input
              type="text"
              name="phone"
              className="md:flex-grow rounded-full border border-stone-200 px-4 text-sm md:text-lg transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-golden md:px-6 py-3 text-black"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5 md:flex-row md:items-center">
            <label htmlFor="address" className="font-bold text-lg md:basis-40">
              Address
            </label>
            <div className="grow relative space-y-4">
              <input
                type="text"
                name="address"
                className="flex-grow rounded-full border border-stone-200 px-4 text-sm md:text-lg transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-golden md:px-6 py-3 w-full text-black"
                // defaultValue={address.city}
              />
            </div>
          </div>
          <div className="flex gap-2 mt-10 md:items-center">
            <input
              type="checkbox"
              name="priority"
              className="rounded-full border border-stone-200 px-4 py-2 text-sm md:text-lg transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-golden accent-golden"
            />
            <label
              htmlFor="priority"
              className="font-semibold text-lg text-silver"
            >
              Do you want to give your order priority?
            </label>
          </div>
          <input
            type="hidden"
            name="items"
            defaultValue={JSON.stringify(items)}
          />
          <div className="flex items-center gap-3 mt-14 md:gap-5">
            <Link
              className="bg-crimson px-4 py-3 font-bold rounded-full block text-black md:px-7"
              to="/menu"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="bg-golden px-4 py-3 font-bold rounded-full block text-black md:px-7"
            >
              Order
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

// export async function getlocation() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;
//         const location = await getAddress({ lat, lng });
//         resolve(location);
//       },
//       (err) => {
//         reject(err.message);
//       }
//     );
//   });
// }

export async function postOrder({ request }) {
  const data = await request.formData();
  const dataobj = Object.fromEntries(data);
  const Order = {
    ...dataobj,
    items: JSON.parse(dataobj.items),
    priority: dataobj.priority === "on",
    address: dataobj.address,
  };
  console.log(Order);
  const newOrder = await createOrder(Order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
