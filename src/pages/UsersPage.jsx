import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";
import StateCard from "../components/common/StateCard";
import Header from "../components/common/Header";
import UserGrowthChart from "../components/UserGrowthChart";
import UserActivityHeatmap from "../components/UserActivityHeatmap";
import UserDemographicsChart from "../components/UserDemographicsChart";
import UsersTable from "../components/UsersTable";

const userStats = {
    totalUsers: 152845,
    newUsersToday: 243,
    activeUsers: 98520,
    churnRate: "2.4%",
};

const UsersPage = () => {
    return (
        <div className='flex-1 relative z-10 overflow-auto min-w-72'>

            <Header title="users" />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* STATS */}
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StateCard
                        name='Total Users'
                        icon={UsersIcon}
                        value={userStats.totalUsers.toLocaleString()}
                        color='#6366F1'
                    />
                    <StateCard name='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
                    <StateCard
                        name='Active Users'
                        icon={UserCheck}
                        value={userStats.activeUsers.toLocaleString()}
                        color='#F59E0B'
                    />
                    <StateCard name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
                </motion.div>

                <UsersTable/>

                {/* USER CHARTS */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
					<UserGrowthChart />
					<UserActivityHeatmap />
					<UserDemographicsChart />
				</div>

            </main>



        </div>
    )
}

export default UsersPage