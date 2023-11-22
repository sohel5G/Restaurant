import { loadStripe } from "@stripe/stripe-js";
import Title from "../../Home/Title/Title";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_GATEWAY_PK_TEST);

const Payment = () => {
    return (
        <div className="bg-slate-200">
            <div>
                <Title title="Stripe Payment" subTitle="Please pay for your order"></Title>
            </div>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;