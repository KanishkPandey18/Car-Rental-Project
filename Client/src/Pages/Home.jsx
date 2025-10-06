import React from 'react'
import Hero from '../Components/Hero'
import CarCard from '../Components/CarCard'
import FeaturedSection from '../Components/FeaturedSection'
import Banner from '../Components/Banner'
// import dummyCarData from '../assets/assets'

const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedSection/>
            <Banner/>
        </div>
    )
}

export default Home
