/* eslint-disable @next/next/no-img-element */
import NumbersSection from '@/components/common/NumbersSection'
import React, { useEffect, useState } from 'react'


const TimeLeft = () => {
    //hour min sec
    //start form 24 hours
    const [time, setTime] = useState([23, 59, 59])

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => {
                if (prev[2] === 0) {
                    if (prev[1] === 0) {
                        if (prev[0] === 0) {
                            return [0, 0, 0]
                        }
                        return [prev[0] - 1, 59, 59]
                    }
                    return [prev[0], prev[1] - 1, 59]
                }
                return [prev[0], prev[1], prev[2] - 1]
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="mt-3 mb-5 flex w-[30%] justify-center gap-3 items-end m-auto">
            <div className='text-center'>
                Hour
                <div className="border-2 border-secondary p-2 rounded-lg mt-1">
                    {time[0]}
                </div>
            </div>
            <div className='pb-3'>:</div>
            <div className='text-center'>
                Min
                <div className="border-2 border-secondary p-2 rounded-lg mt-1">
                    {time[1]}
                </div>
            </div>
            <div className='pb-3'>:</div>
            <div className='text-center'>
                Sec
                <div className="border-2 border-secondary p-2 rounded-lg mt-1">
                    {time[2]}
                </div>
            </div>
        </div>
    )
}

const Top1 = ({ onSetActive }) => {
    return (
        <>
            <div className='w-full space-y-7 flex flex-col justify-center m-auto'>
                <img src="/assets/images/nft.svg" alt="" className='w-full' />

            </div>
            <div className='space-y-4 md:order-2 order-first'>
                <div className="border border-secondary text-secondary py-5 px-7 rounded-3xl">
                    <div className="flex justify-end gap-3">
                        <div className="p-1 rounded-lg border border-secondary cursor-pointer" onClick={() => onSetActive('prev')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>

                        </div>
                        <div className="p-1 rounded-lg border border-secondary cursor-pointer" onClick={() => onSetActive('next')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </div>

                    </div>
                    <div className="mt-5">
                        <button className='btn-simple w-full'>Next Draw</button>
                        <div className="mt-5 text-center">
                            Sat, June 3, 2023
                        </div>
                        <TimeLeft />
                        <button className='btn-simple w-full'>Price Pot</button>
                        <div className="space-y-3 my-3">
                            <div className="flex justify-center items-center">
                                <img src="/assets/images/ethereum.svg" alt="ethereum" className='w-8 h-8' />
                                <div className="text-2xl text-center">10 ETH</div>

                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="text-base text-center">ox145nsd3ssa.....k7258</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="text-base text-center">Ticket Price <span className='text-primary' >0.0001ETH</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <NumbersSection />
            </div>
        </>
    )
}

export default Top1