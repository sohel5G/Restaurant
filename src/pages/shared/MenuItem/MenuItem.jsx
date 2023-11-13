/* eslint-disable react/prop-types */

const MenuItem = ({item}) => {

    const { name, recipe, image, price } = item;

    return (
        <div className="flex gap-5 items-center justify-between">
            <div>
                <img style={{borderRadius:'0px 50px 50px 50px'}} className="w-24" src={image} alt={name} />
            </div>
            <div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <p>{recipe}</p>
            </div>
            <div>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;

