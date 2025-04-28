import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export const action = async (objBawaan) => {
  // console.log(objBawaan.request.formData());
  // console.log(objBawaan.request);
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

  return redirect(`/order/${order.id}`);
};

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  //checking loading state
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  //getting error state for phone validation
  //acting as a state
  const err = useActionData();

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>
      <Form method="POST" action="/order/new">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="rounded-full border border-stone-200 px-3 py-1 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-green-500 w-full"
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input" />
          </div>
          {err?.errorMessage ? (
            <p style={{ color: "red" }}>{err.errorMessage}</p>
          ) : null}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required className="input" />
          </div>
        </div>

        <div>
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
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Processing your order now..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
