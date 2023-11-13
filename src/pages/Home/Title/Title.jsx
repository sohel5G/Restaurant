/* eslint-disable react/prop-types */

const Title = ({ title, subTitle }) => {
    return (
        <div className="py-8">
            <div className="w-3/4 md:w-2/4 mx-auto py-9">
                <h1 className='text-3xl font-semibold text-center py-3'> {title} </h1>
                <p className='text-xl py-2 font-normal text-center'> {subTitle} </p>
            </div>
        </div>
    );
};

export default Title;



