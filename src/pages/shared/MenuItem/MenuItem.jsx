/* eslint-disable react/prop-types */

const MenuItem = ({ item }) => {

    const { name, recipe, image, price, category } = item;

    return (
        <div className="flex gap-5 items-center justify-between">
            <div>
                <img style={{ borderRadius: '0px 50px 50px 50px' }} className="w-24" src={image} alt={name} />
            </div>
            <div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <p>{recipe}</p>
                <span className="border border-slate-700 mt-2 text-xs py-[1px] px-[5px] pb-[4px] rounded-lg">{category}</span>
            </div>
            <div>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;

