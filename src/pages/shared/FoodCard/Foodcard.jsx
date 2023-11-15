/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const Foodcard = ({ item }) => {
    const { name, recipe, image, price, category, _id } = item;
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const navigate = useNavigate();
    const location = useLocation();

    const [, , , refetch] = useCart();

    const handleAddToCart = () => {

        if (user && user.email) {
            const cartItem = {
                cartItemId: _id,
                cartItemUser: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/user/add-cart', cartItem)
            .then(res => {
                if (res.data.insertedId){
                    
                    refetch();
                    
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "One item has been added to cart",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

        } else {
            Swal.fire({
                title: "You are not logIn",
                text: "Please login first to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: location.pathname })
                }
            });
        }
    }

    return (
        <>
            <div className="card bg-base-100 shadow-xl text-center">
                <figure><img src={image} alt="foods" /></figure>
                <p className="bg-black text-white p-2 absolute top-5 right-5">{price}</p>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <span className="border border-slate-700 mt-2 text-xs py-[1px] px-[5px] pb-[4px] rounded-lg">{category}</span>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button
                            className="btn btn-primary"
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Foodcard;