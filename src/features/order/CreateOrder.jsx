import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

//action() must return:1.redirect/2.response object/3.null
export const action = async (objBawaan) => {
  console.log(objBawaan);
  // console.log(objBawaan.request.formData());
  // console.dir(objBawaan.request);
  // console.log(Object.getPrototypeOf(objBawaan.request));
  const formData = await objBawaan.request.formData();
  // console.log(formData);
  const data = Object.fromEntries(formData);
  // console.log(data);

  const newOrder = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };

  console.log(newOrder);

  //checking if phone number valid
  if (!isValidPhone(newOrder.phone)) {
    return {
      errorMessage:
        "Please give us correct phone number as we might contact you regarding your order!!cheers",
    };
  }

  //submit form if everything is okay
  const order = await createOrder(newOrder);
  // console.log(order);

  //action must return something(redirect must me-returned in order to give the response to react-router to do navigation )
  //must use redirect because we using action not react component!!!
  return redirect(`/order/${order.id}`);
};

function CreateOrder() {
  const dispatch = useDispatch();
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorStatus,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === "loading";
  console.log(errorStatus);

  // const [withPriority, setWithPriority] = useState(false);
  // const cart = fakeCart;
  const cart = useSelector(getCart);
  // console.log(JSON.stringify(cart));

  //checking loading state
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  //getting error state for phone validation
  //acting as a state
  //useActionData() is used to get result of the action that wired up with CreateOrder component
  const err = useActionData();

  return (
    <div className="px-4 py-6">
      <h2 className="font-semibold text-xl mb-8">Ready to order? Let's go!</h2>
      <Form method="POST" action="/order/new">
        <div className="mb-5 flex flex-col sm:flex-row">
          <label className="sm:basis-1/5">First Name:</label>
          <input
            type="text"
            name="customer"
            required
            className="sm:basis-4/5 rounded-full border border-stone-200 px-3 py-1 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-green-500 w-full disabled:bg-red-300"
            defaultValue={username}
          />
        </div>

        <div className="mb-5 flex flex-col sm:flex-row ">
          <label className="sm:basis-1/5">Phone number:</label>

          <input
            type="tel"
            name="phone"
            required
            className="sm:basis-4/5 rounded-full border border-stone-200 px-3 py-1 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-green-500 w-full"
          />
        </div>
        {err?.errorMessage ? (
          <>
            <p className="text-xs text-white bg-red-400 p-2 px-3 rounded-full">
              {err.errorMessage}
            </p>
            <br />
          </>
        ) : null}

        <div className="mb-5 flex flex-col sm:flex-row">
          <label className="sm:basis-1/5">Address:</label>
          <div className="sm:basis-4/5 relative">
            <input
              type="text"
              name="address"
              required
              className="rounded-full border border-stone-200 px-3 py-1 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-green-500 w-full disabled:bg-stone-200"
              disabled={isLoadingAddress}
              defaultValue={address}
            />

            {!address && (
              <button
                className="absolute right-1 top-1 sm:right-1 sm:top-1 cursor-pointer text-xs border border-neutral-400 rounded-full py-0.5 px-2"
                type="round"
                disabled={isLoadingAddress}
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position 📍
              </button>
            )}
          </div>
        </div>
        {addressStatus === "error" && (
          <>
            <p className="text-xs text-white bg-red-400 py-2 px-3 rounded-full">
              {errorStatus}
            </p>
            <br />
          </>
        )}

        <div className="mb-12 space-x-4">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="w-4 h-4  accent-green-600"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          {/* //input hidden in order to send data outside form!! */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.latitude && position.longitude
                ? `${position.latitude} , ${position.longitude}`
                : "user denied geolocation, therefore lat and lang are not available"
            }
          />
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? "Processing your order now..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
