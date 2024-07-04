import { useDispatch, useSelector } from "react-redux";
import { clearCart, addItem, removeItem, removeDuplicateItem } from "../store/slices/cartSlice";
import {useEffect} from "react";
import EmtyCart from "../components/EmtyCart";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.totalPrice);
  let cartItems = [];
  items.forEach((item) => {
    if (!cartItems.includes(item)) {
      cartItems.push(item);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const addItems = (item) => {
    dispatch(addItem(item));
    cartItems = [];
  };

  const removeItems = (item) => {
    dispatch(removeItem(item));
    cartItems = [];
  };

  const removeDuplicateItems = (item) => {
    dispatch(removeDuplicateItem(item));
    cartItems = [];
  };

  // const cleanUp = () => {
  //   dispatch(clearCart());
  // };

  return items.length === 0 ? (
    <EmtyCart />
  ) : (
    <div className="min-h-screen bg-gray-100 pt-28 mb-3">
      <h1 className="mb-10 text-center text-3xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cartItems.map((item, i) => {
            return (
              <div
                key={item.title + i}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={item.image}
                  alt="product-image"
                  className="w-full h-32 rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                    <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-500 hover:text-blue-50"
                        onClick={() => removeItems(item)}
                      >
                        {" "}
                        -{" "}
                      </span>
                      <input
                        className="h-8 max-w-8 border bg-white text-center text-md pl-2 outline-none"
                        type="number"
                        value={items ? items.filter((ele) => ele.title === item.title).length : "0"}
                        min="1"
                        readOnly
                      />
                      <span
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-500 hover:text-blue-50"
                        onClick={() => addItems(item)}
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">{"$" + Math.ceil(item.defaultPrice ? item.defaultPrice / 100 : item.price / 100)}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        onClick={() => removeDuplicateItems(item)}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">{"$" + totalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Delivary charge</p>
            <p className="text-gray-700">$3</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold text-end">{"$" + (totalPrice ? totalPrice + 30 : "0")}</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-[dodgerblue] py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
