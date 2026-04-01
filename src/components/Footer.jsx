import React from 'react';
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='max-w-[1100px] mx-auto py-7'>
            <div className='grid grid-cols-5 gap-4 mb-6'>
                <div className='space-y-3'>
                    <h1 className='font-bold text-3xl'>DigiTools</h1>
                    <p className='text-[10px] text-[#627382]'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Product</h1>
                    <p className='text-[10px] text-[#627382]'>Features</p>
                    <p className='text-[10px] text-[#627382]'>Pricing</p>
                    <p className='text-[10px] text-[#627382]'>Template</p>
                    <p className='text-[10px] text-[#627382]'>Integrations</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Company</h1>
                    <p className='text-[10px] text-[#627382]'>About</p>
                    <p className='text-[10px] text-[#627382]'>Blog</p>
                    <p className='text-[10px] text-[#627382]'>Careers</p>
                    <p className='text-[10px] text-[#627382]'>Press</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Resources</h1>
                    <p className='text-[10px] text-[#627382]'>Documentation</p>
                    <p className='text-[10px] text-[#627382]'>Help Center</p>
                    <p className='text-[10px] text-[#627382]'>Community</p>
                    <p className='text-[10px] text-[#627382]'>Contact</p>
                </div>
                <div>
                    <h1>Social Links</h1>
                    <div className='flex gap-2'>
                        <TbBrandInstagramFilled />
                        <FaFacebookSquare />
                        <FaXTwitter />
                    </div>
                </div>
            </div>
            <hr />

            <div className='flex justify-between mt-5'>
                <div>
                    <p className=' text-[#627382]'>© 2026 Digitools. All rights reserved.</p>
                </div>
                <div className='flex gap-3'>
                    <p className=' text-[#627382]'>Privacy Policy</p>
                    <p className=' text-[#627382]'>Terms of Service</p>
                    <p className=' text-[#627382]'>Cookies</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;