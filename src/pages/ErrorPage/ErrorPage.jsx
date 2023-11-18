import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className="h-[90vh] flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-7xl font-semibold"> {error.status} </h1>
                <h1 className="text-5xl font-semibold py-7"> {error.statusText} </h1>
                <Link to={'/'}> <button className="bg-black text-white font-semibold py-2 px-5 rounded-lg text-lg">Go to home</button> </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
