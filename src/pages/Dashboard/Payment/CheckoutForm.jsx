import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { user } = useAuth();

    const stripe = useStripe();
    const elements = useElements();

    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const totalPrice = cart?.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        axiosSecure.post('/create-stripe-payment-intent', { price: totalPrice })
            .then(res => {
                setClientSecret(res.data.clientSecret);
                console.log('Client secret from the server side', res.data.clientSecret);
            })
    }, [axiosSecure, totalPrice])

    const handleCheckout = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log('Payment method Error', error);
            setError(error.message);
        } else {
            console.log('Payment method', paymentMethod);
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'Unknown',
                    name: user?.displayName || 'Unknown'
                }
            }
        })

        if(confirmError){
    
            console.log('Conform payment error', confirmError);
        
        }else{

            console.log('Confirm Payment Intent', paymentIntent);

            if (paymentIntent.status === 'succeeded'){
                console.log('Transaction Id : ', paymentIntent.id);
                setTransactionId(paymentIntent.id);
            }
        }

    }

    return (
        <div className="max-w-lg mx-auto">
            <form onSubmit={handleCheckout}>
                <CardElement>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '18px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button type="submit" disabled={!stripe || !clientSecret} className="bg-black py-1 px-3">
                        Pay
                    </button>
                </CardElement>
            </form>
            <p className="text-red-500 py-5"> {error} </p>
            <p className="text-green-500 py-5"> {transactionId} </p>
        </div>
    );
};

export default CheckoutForm;