import { FiShoppingCart } from 'react-icons/fi';
import useCart from '../../../hooks/useCart';

const MenuCart = () => {

    const [cart] = useCart();
    const totalprice = cart.reduce((total, item) => total + item.price, 0)
    
    return (
        <>
            <div className='flex justify-center items-center gap-2 px-3'>
                <div className='relative'>
                    <div className='text-xl font-medium h-7 w-9 rounded-full flex justify-center items-center'>
                        <FiShoppingCart></FiShoppingCart>
                    </div>
                    <span className='text-xs font-medium absolute -top-3 -right-2 !text-white bg-black flex justify-center items-center w-5 h-5 rounded-full'>{cart?.length}</span>
                </div>
                <div>
                    <p className='text-base font-medium'> <span>$</span>{Math.ceil(parseFloat(totalprice)).toFixed(2)}</p>
                </div>
            </div>
        </>
    );
};

export default MenuCart;