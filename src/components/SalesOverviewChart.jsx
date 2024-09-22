import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { useState } from "react";


const monthlySalesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 5500 },
    { month: "Jul", sales: 7000 },
];


const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

const SalesOverviewChart = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >

            <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>

            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={monthlySalesData} >
                        <CartesianGrid strokeDasharray='3 3' stroke="#4b5563" />
                        <XAxis dataKey="month"  />
                        <YAxis stroke="$9ca3af" />
                        <Tooltip
                            contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Line
                            type='monotone'
                            dataKey='sales'
                            stroke='#6366f1'
                            strokeWidth={3}
                            dot={{ fill: "#6366f1", strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, strokeWidth: 2 }}

                        />


                    </LineChart>
                </ResponsiveContainer>



            </div>

        </motion.div>
    )
}

export default SalesOverviewChart