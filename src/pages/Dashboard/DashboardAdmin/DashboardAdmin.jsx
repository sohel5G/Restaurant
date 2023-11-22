/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import loaderIcon from "../../../assets/icon/loader.gif";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie } from 'recharts';




const DashboardAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const { data: adminStates, isLoading } = useQuery({
        queryKey: ['admin_stats'],
        queryFn: async () => {
            const response = await axiosSecure.get('/admin-stats');
            return response.data;
        }
    });

    const { data: orderStates = [] } = useQuery({
        queryKey: ['orderStates'],
        queryFn: async () => {
            const response = await axiosSecure.get('/order-stats');
            return response.data;
        }
    })


    // Bar Chart 
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    // Bar Chart  End


    // Pie Chart 
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = orderStates.map(data => {
        return {name: data.category, value: data.revenue}
    })
    // Pie Chart End

    console.log(orderStates);

    return (
        <>
            <div>
                <h1 className='text-3xl'>Welcome back {user?.displayName}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 my-5">
                <div className="border border-black rounded-lg p-6 text-center">
                    <h1 className="text-2xl font-semibold">Revenue</h1>
                    <p className="text-xl font-medium my-5">{isLoading ? <img className="w-5 mx-auto" src={loaderIcon} /> : adminStates?.revenue}</p>
                </div>
                <div className="border border-black rounded-lg p-6 text-center">
                    <h1 className="text-2xl font-semibold">Customers</h1>
                    <p className="text-xl font-medium my-5">{isLoading ? <img className="w-5 mx-auto" src={loaderIcon} /> : adminStates?.users}</p>
                </div>
                <div className="border border-black rounded-lg p-6 text-center">
                    <h1 className="text-2xl font-semibold">Menu Items</h1>
                    <p className="text-xl font-medium my-5">{isLoading ? <img className="w-5 mx-auto" src={loaderIcon} /> : adminStates?.menuItems}</p>
                </div>
                <div className="border border-black rounded-lg p-6 text-center">
                    <h1 className="text-2xl font-semibold">Orders</h1>
                    <p className="text-xl font-medium my-5">{isLoading ? <img className="w-5 mx-auto" src={loaderIcon} /> : adminStates?.orders}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between pb-10">
                <div>
                    <BarChart
                        width={400}
                        height={400}
                        data={orderStates}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {orderStates.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>
                    <PieChart width={400} height={370}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </>
    );
};

export default DashboardAdmin;

