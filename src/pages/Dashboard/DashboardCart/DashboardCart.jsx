import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const DashboardCart = () => {
    const [cart, , , refetch] = useCart();
    const totalprice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure()

    const handleDelete = itemId => {

        Swal.fire({

            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"

        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`http://localhost:5000/user/delete-cart/${itemId}`)
                    .then(response => {
                        if (response.data.deletedCount > 0) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your file has been deleted.",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            refetch();
                        }
                    })

            }
        });
    }

    return (
        <>
            <div className="flex gap-5 justify-between bg-gray-100 py-4 px-5 rounded-md">
                <h1 className="text-2xl">Item {cart?.length}</h1>
                <h1 className="text-2xl">Total Price ${totalprice}</h1>
                {
                    cart.length ?
                        <>
                            <Link to={'/dashboard/payment'}>
                                <button className="bg-black text-white text-lg py-2 px-5 rounded-md">Pay</button>
                            </Link>
                        </> :
                        <>
                            <button className="bg-[#00000047] text-white text-lg py-2 px-5 rounded-md">Pay</button>
                        </>
                }
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead className="bg-gray-100">
                            <tr className="border-gray-200">
                                <th className="text-lg">Number</th>
                                <th className="text-lg">Image</th>
                                <th className="text-lg">Name</th>
                                <th className="text-lg">Price</th>
                                <th className="text-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.map((item, index) => <tr key={item._id} className="border-gray-200">
                                    <th>
                                        <h1>{index + 1}</h1>
                                    </th>
                                    <td>
                                        <div>
                                            <img className="w-20 rounded-xl" src={item.image} alt={item.name} />
                                        </div>
                                    </td>
                                    <td>
                                        <h2 className="text-xl">{item.name}</h2>
                                    </td>
                                    <td>
                                        <p> {item.price} </p>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="text-2xl text-red-400"><MdDelete /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>

                        <tfoot className="bg-gray-100">
                            <tr>
                                <th className="text-lg">Number</th>
                                <th className="text-lg">Image</th>
                                <th className="text-lg">Name</th>
                                <th className="text-lg">Price</th>
                                <th className="text-lg">Action</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </>
    );
};

export default DashboardCart;