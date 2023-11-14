/* eslint-disable react/prop-types */

const Foodcard = ({ item }) => {
    const { name, recipe, image, price, category } = item;
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
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Foodcard;