import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const ImageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const ImageHostingAPI = `https://api.imgbb.com/1/upload?key=${ImageHostingKey}`

const AddItem = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async(data) => {

        const imageFile = {image: data.image[0]};
        const response = await axiosPublic.post(ImageHostingAPI, imageFile, {
            headers: {
                'content-type':'multipart/form-data',
            }
        })

        if (response.data.success){

            const menuItem = {
                name: data.name,
                category: data.category,
                price: data.price,
                recipe: data.recipe,
                image: response.data.data.display_url,
            }
            const menuResponse = await axiosSecure.post('/admin/add-item', menuItem);
            if (menuResponse.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is added successfully`,
                    showConfirmButton: false,
                    timer: 2000
                });
                reset();
            }

        }

        console.log(response.data.data.display_url)
        console.log(response.data.success)
        console.log(data)
    }

    return (
        <>
            <section className="py-8 px-5">
                <div className="pb-8 rounded-md px-4 mx-auto max-w-4xl dark:border dark:border-gray-700 shadow">
                    <h2 className="mb-12 text-3xl font-medium text-gray-900 dark:text-white">
                        Add Item
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Recipe name*
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Add a Recipe name"
                                />
                                {errors?.name && <span className="text-red-500">Recipe name is required</span>}
                            </div>

                            <div className="w-full">
                                <label
                                    htmlFor="category"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Category*
                                </label>
                                <select
                                    {...register("category", { required: true })}
                                    name="category"
                                    id="category"
                                    defaultValue=""
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                >
                                    <option value="">Category</option>
                                    <option value="salad"> Salad </option>
                                    <option value="pizza"> Pizza </option>
                                    <option value="soup"> Soups </option>
                                    <option value="dessert"> Desserts </option>
                                    <option value="drinks"> Drinks </option>
                                </select>
                                {errors?.category && <span className="text-red-500">Category is required</span>}
                            </div>

                            <div className="w-full">
                                <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Price*
                                </label>
                                <input
                                    {...register("price", { required: true })}
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Price"
                                />
                                {errors?.price && <span className="text-red-500">Price is required</span>}
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="recipe"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Recipe Details*
                                </label>
                                <textarea
                                    {...register("recipe", { required: true })}
                                    name="recipe"
                                    id="recipe"
                                    rows={9}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Write your Recipe Details here..."
                                />
                                {errors?.recipe && <span className="text-red-500"> Recipe Details is required</span>}
                            </div>

                            <div className="sm:col-span-2">
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        {...register("image", { required: true })}
                                        name="image"
                                        type="file"
                                        className="file-input file-input-bordered border-gray-200 w-full max-w-xs"
                                    />
                                    {errors?.image && <span className="text-red-500">File is required</span>}
                                </div>
                            </div>

                        </div>
                        <input
                            type="submit"
                            value="Add Item"
                            className="cursor-pointer inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-base font-medium text-center rounded-lg bg-black text-white"
                        />
                    </form>
                </div>
            </section>

        </>
    );
};

export default AddItem;