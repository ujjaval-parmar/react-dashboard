import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion';
import StateCard from '../components/common/StateCard';
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react';
import SalesOverviewChart from '../components/SalesOverviewChart';
import CategoryDistributionChart from '../components/CategoryDistributionChart';
import SalesChannerChart from '../components/SalesChannerChart';


const OverviewPage = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto min-w-72'>

      <Header title="overview" />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

        {/* States */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard name='Total Sales' icon={Zap} value='$12,345' color='#6366F1' />
          <StateCard name='New Users' icon={Users} value='1,234' color='#8B5CF6' />
          <StateCard name='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
          <StateCard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />

        </motion.div>


        {/* Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

          <SalesOverviewChart />

          <CategoryDistributionChart />

          <SalesChannerChart />

        </div>




      </main>




    </div>
  )
}

export default OverviewPage