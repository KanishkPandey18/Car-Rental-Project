import React, { useEffect, useState } from 'react'
import Title from '../../Components/owner/Title'
import { assets, dummyDashboardData } from '../../assets/assets'

const Dashboard = () => {

    const [data,setData] = useState({
        totalCars:0,
        totalBookings:0,
        pendingBookings:0,
        completedBookings:0,
        recentBookings:[],
        monthlyRevenue:0,
    })

    const dashboardCards = [
        {title:"Total Cars" , value:data.totalCars,icon: assets.carIconColored},
        {title:"Total Bookings" , value:data.totalBookings,icon: assets.listIconColored},
        {title:"Pending" , value:data.pendingBookings,icon: assets.cautionIconColored},
        {title:"Confirmed" , value:data.completedBookings,icon: assets.listIconColored},
    ]

    useEffect(()=>{
        setData(dummyDashboardData)
    },[])
    return (
        <div className='px-4 pt-10 md:px-10 flex-1'>
            <Title title="Admin Dashboard" subTitle="Monitor overall platform performance including total cars,bookings,revenue,recent activites"/>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-3xl my-8 gap-6'>
                {dashboardCards.map((card,index)=>(
                    <div key={index} className='flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor'>
                        <div>
                        <h1 className='text-xs text-gray-500'>{card.title}</h1>
                        <p className='font-semibold text-lg'>{card.value}</p>
                        </div>
                        
                        <div className='flex items-center justify-center bg-primary/10 rounded-full w-10 h-10'>
                            <img src={card.icon} alt="" className='h-5 w-5'/>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>
                {/* Recent Bookings */}
                <div className='p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full'></div>

                {/* Monthly Revenue */}
                <div className='p-4 mb-6 md:p-6 rounded-md border border-borderColor w-full md:max-w-xs'>
                    <h1>hello</h1>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
