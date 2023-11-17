import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['AllUsers'],
        queryFn: async () => {
            const response = await axiosSecure.get('/users')
            return response.data
        }
    })


    const handleUserRoleEdit = (item) => {
        axiosSecure.patch(`/users/make-admin/${item._id}`)
            .then(res => {

                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${item.name} is now admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }

            })
    }


    const handleUserDelete = (itemId) => {

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

                axiosSecure.delete(`/users/${itemId}`)
                    .then(response => {
                        if (response.data.deletedCount > 0) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "User has been deleted.",
                                showConfirmButton: false,
                                timer: 2000
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
                <h1 className="text-2xl">All Users : {users?.length} </h1>
                <h1 className="text-2xl"> </h1>
                <button></button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead className="bg-gray-100">
                            <tr className="border-gray-200">
                                <th className="text-lg">Number</th>
                                <th className="text-lg">Name</th>
                                <th className="text-lg">Email</th>
                                <th className="text-lg">Role</th>
                                <th className="text-lg">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                users.map((item, index) => <tr key={item._id} className="border-gray-200">
                                    <th>
                                        <h1>{index + 1}</h1>
                                    </th>
                                    <th>
                                        <h1>{item?.name}</h1>
                                    </th>
                                    <td>
                                        <h1>{item?.email}</h1>
                                    </td>
                                    <td>
                                        {
                                            item.role === 'admin' ? 
                                            <>
                                                <button className="text-black">Admin</button>
                                            </> : 
                                            <>
                                                <button onClick={() => handleUserRoleEdit(item)} className="text-orange-500">Edit</button>
                                            </>
                                        }
                                        
                                    </td>
                                    <th>
                                        <button onClick={() => handleUserDelete(item._id)} className="text-2xl text-red-400"><MdDelete /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>

                        <tfoot className="bg-gray-100">
                            <tr>
                                <th className="text-lg">Number</th>
                                <th className="text-lg">Name</th>
                                <th className="text-lg">Email</th>
                                <th className="text-lg">Role</th>
                                <th className="text-lg">Action</th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUsers;