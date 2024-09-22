import { motion } from 'framer-motion'
import React from 'react'

const SettingSection = ({ icon:Icon, title, children}) => {
  return (
    <motion.div
			className='w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='flex items-center mb-4'>
				<Icon className='text-indigo-400 mr-4' size='24' />
				<h2 className='text-base sm:text-lg font-semibold text-gray-100'>{title}</h2>
			</div>
			{children}
		</motion.div>
  )
}

export default SettingSection