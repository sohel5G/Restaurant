import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Reservation = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: reservation = [] } = useQuery({
        queryKey: ['allReservation'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/my-reservation/${user?.email}`)
            return response.data;
        }
    })

    return (
        <>
            <div className="flex gap-5 justify-between bg-gray-100 py-4 px-5 rounded-md">
                <h1 className="text-2xl">Total Payments: {reservation?.length} </h1>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead className="bg-gray-100">
                            <tr className="border-gray-200">
                                <th className="text-lg">Email</th>
                                <th className="text-lg">Transaction Id</th>
                                <th className="text-lg">Total</th>
                                <th className="text-lg">Date</th>
                                <th className="text-lg">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reservation?.map(item => <tr key={item._id} className="border-gray-200">
                                    <td>
                                        <p> {item.userEmail} </p>
                                    </td>
                                    <td>
                                        <p> {item?.transactionId} </p>
                                    </td>
                                    <td>
                                        <p> {item.totalPrice} </p>
                                    </td>
                                    <td>
                                        <p> {item?.date} </p>
                                    </td>
                                    <td>
                                        <p> {item.status} </p>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                        <tfoot className="bg-gray-100">
                            <tr>
                                <th className="text-lg">Email</th>
                                <th className="text-lg">Transaction Id</th>
                                <th className="text-lg">Total</th>
                                <th className="text-lg">Date</th>
                                <th className="text-lg">Status</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </>
    );
};

export default Reservation;