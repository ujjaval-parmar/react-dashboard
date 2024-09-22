import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

const PRODUCT_DATA = [
    { id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
    { id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
    { id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
    { id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
    { id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

const ProductTable = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

    const handleFilteredProducts = (e) => {

        setSearchTerm(e.target.value);
        const term = e.target.value.toLowerCase();


        setFilteredProducts(() => {
            return PRODUCT_DATA.filter(product => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term));
        })

    }

    


    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >

            <div className='flex flex-col gap-3 sm:flex-row justify-between sm:items-center mb-6 '>

                <h2 className='text-xl font-semibold text-gray-100'>Product List</h2>

                <div className='relative right-2'>
                    <input
                        type="text"
                        placeholder='Search Products...'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 py-2 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-44'
                        value={searchTerm}
                        onChange={handleFilteredProducts}
                    />
                    <Search
                        className='absolute left-3 top-2.5 text-gray-400 '
                        size={18}

                    />
                </div>

            </div>

            <div className='overflow-x-auto   scroll-table'>

                <table className='min-w-full divide-y divide-gray-700'>

                    <thead className='grid grid-cols-[repeat(7,minmax(100px,1fr))]'>

                        <tr className='col-span-2'>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Name
                            </th>
                        </tr>

                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Category
                            </th>
                        </tr>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Price
                            </th>
                        </tr>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Stock
                            </th>
                        </tr>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Sales
                            </th>
                        </tr>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Actions
                            </th>
                        </tr>

                    </thead>


                    <tbody className='divide-y divide-gray-700'>

                        {filteredProducts.map(product => {
                            return (
                                <motion.tr 
                                key={product.id} 
                                className=' grid grid-cols-[repeat(7,minmax(100px,1fr))] items-center '
                                initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
                                
                                >
                                    <td className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider flex gap-1 items-center col-span-2'>
                                        <img
                                            src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
                                            alt='Product img'
                                            className='size-10 rounded-full'
                                        />
                                        {product.name}
                                    </td>
                                    <td className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                        {product.category}
                                    </td>
                                    <td className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                        {product.price}
                                    </td>
                                    <td className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                        {product.stock}
                                    </td>
                                    <td className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                        {product.sales}
                                    </td>
                                    <td className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-4'>
                                        <Edit className='text-indigo-400 hover:text-indigo-300 mr-2 cursor-pointer'/>
                                        <Trash2 className='text-red-400 hover:text-red-300 cursor-pointer' />
                                    </td>
                                </motion.tr>
                            )
                        })}

                    </tbody>


                </table>

            </div>




        </motion.div>
    )
}

export default ProductTable