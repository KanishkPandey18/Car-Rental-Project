import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
            <div className='flex flex-wrap justify-between gap-8 pb-6 border-borderColor border-b'>
                <div >
                    <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
                    <p className='text-sm max-w-80 mt-3'>
                        Premium car rental services with a wide selection of luxury and everyday vehicles for your driving needs.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        <a href="#"><img src={assets.facebook_logo} alt="facebook" className='h-5 w-5' /></a>
                        <a href="#"><img src={assets.instagram_logo} alt="facebook" className='h-5 w-5' /></a>
                        <a href="#"><img src={assets.twitter_logo} alt="facebook" className='h-5 w-5' /></a>
                        <a href="#"><img src={assets.gmail_logo} alt="facebook" className='h-5 w-5' /></a>
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-2'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">List Your Car</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-2'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms Of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-base font-medium uppercase text-gray-800'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-2'>
                        <li>1234 Luxury Drive</li>
                        <li>San Francis, CA</li>
                        <li>+1 23456789</li>
                        <li>info@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">CarRental</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li>|</li>
                    <li><a href="#">Terms</a></li>
                    <li>|</li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
