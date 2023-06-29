/* eslint-disable @next/next/no-img-element */
import NumbersSection from '@/components/common/NumbersSection'
import React, { useEffect, useState } from 'react'
import { digit } from '../common/PickModal'
import DrawModal from '../common/DrawModal'



const Top2 = ({ onSetActive }) => {
    const [isDrawModal, setIsDrawModal] = useState(false)
    return (
        <>
            <div className='w-full space-y-7 flex flex-col justify-center m-auto'>
                <img src="/assets/images/aidoge.svg" alt="" className='w-full' />

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
                        <div className="flex justify-center items-center mb-5 gap-3">
                            <img src="/assets/images/prize.svg" alt="ethereum" className='w-8 h-8' />
                            <div className="text-center text-3xl">
                                Draw # 33
                            </div>

                        </div>

                        <button className='btn-simple w-full' onClick={() => setIsDrawModal(true)}>Winning Numbers</button>
                        <div className="my-3 text-center">
                            Sat, June 3, 2023
                        </div>
                        <div className="flex gap-3 justify-center">
                            {
                                [1, 2, 3, 4, 5, 6].map((item, index) => (
                                    digit(item)
                                ))
                            }
                        </div>
                        <button className='btn-simple w-full mt-5'>Total Payout</button>
                        <div className="space-y-3 my-3">
                            <div className="flex justify-center items-center">
                                <img src="/assets/images/ethereum.svg" alt="ethereum" className='w-8 h-8' />
                                <div className="text-2xl text-center">3.46 ETH</div>

                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="text-base text-center">ox145nsd3ssa.....k7258</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <NumbersSection />
            </div>
            {
                isDrawModal &&
                <DrawModal isOpen={isDrawModal} closeModal={() => setIsDrawModal(false)} />
            }
        </>
    )
}

export default Top2