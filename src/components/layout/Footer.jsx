import React from "react";

const Footer = () => {
    return (
        <div className="bg-slate-50 mt-16 relative inset-x-0 bottom-0 w-full">
            <div className='flex justify-center w-2/3 mx-auto py-8'>
                <div className='w-1/3'>
                    <h4 className="font-bold">Vroom</h4>
                    <p>About</p>
                    <p>Team</p>
                    <p>Policies</p>
                    <p>Careers</p>
                </div>
                <div className='w-1/3'>
                    <h4 className="font-bold">Locations</h4>
                    <p>USA</p>
                    <p>Australia</p>
                    <p>Canada</p>
                    <p>UK</p>
                </div>
                <div className='w-1/3'>
                    <h4 className="font-bold">Explore</h4>
                    <p>Book a car</p>
                    <p>Weddings</p>
                    <p>Trust & Safety</p>                    
                    <p>Sustainability</p>
                </div>
            </div>

            <div className='text-center pb-6'>
                <p>@2023 Vroom All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;