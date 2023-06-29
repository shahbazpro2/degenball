/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-secondary text-white'>
            <div className="container">
                <div className="grid grid-cols-12 lg:gap-10 py-5 lg:py-0">
                    <div className="col-span-12 lg:col-span-4 p-5 flex justify-center flex-col items-center ">
                        Logo
                        <div className="mt-3">
                            Based on transparency, anonymity,
                            security, and fairness, Ridotto is
                            a fully scalable alternative to
                            centralized gambling.
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 flex flex-col items-center justify-center my-5">
                        <div className="py-7 border-b border-[#515151] flex items-center justify-center w-full">
                            <ul className='flex flex-col lg:flex-row items-start gap-10 lg:gap-20'>
                                <Link href="/">
                                    <li className='text-lg'>Column 1</li>
                                    <ul className="mt-3 space-y-1">
                                        <li>Link1</li>
                                        <li>Link2</li>
                                    </ul>
                                </Link>
                                <Link href="/">
                                    <li className='text-lg'>Column 2</li>
                                    <ul className="mt-3 space-y-1">
                                        <li>Link1</li>
                                        <li>Link2</li>
                                    </ul>
                                </Link>

                            </ul>
                        </div>
                        <div className='text-sm text-[#838383] mt-3'>
                            Copyright © {new Date().getFullYear()}. All Rights Reserved
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer