/* eslint-disable @next/next/no-img-element */
'use client'
import Modal from '@/components/common/Modal'
import React from 'react'
import { digit } from './PickModal'

const DrawModal = (props) => {

    return (
        <Modal {...props} >
            <div className="flex justify-end mb-3">
                <div className="cursor-pointer" onClick={props.closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-start items-center gap-3">
                <img src="/assets/images/prize.svg" alt="prize" className='w-8 h-8' />
                <div className="text-center text-3xl">
                    Draw # 33
                </div>

            </div>
            <div className="mt-2">Drawn: Jun 1, 2023, 7:00 PM</div>
            <div className="my-2 text-center text-lg font-bold">Winning Numbers</div>
            <div className="flex gap-2 justify-center">
                {
                    [1, 2, 3, 4, 5, 6].map((item) => digit(item))

                }
            </div>
            <hr className="my-5" />
            <div className='bg-primary/40 text-black text-center py-3 px-3 rounded-sm text-sm w-[60%] m-auto'>
                <div className="font-bold">Your Tickets</div>
                <ul className="space-y-3 mt-3">
                    <li className="flex justify-between items-center">
                        <div>Your Tickets</div>
                        <div>1</div>
                    </li>
                    <li className="flex justify-between items-center">
                        <div>Wining Tickets</div>
                        <div>1</div>
                    </li>
                </ul>
            </div>

            <hr className="my-5" />
            <div className="h-[180px] overflow-auto px-2 space-y-3">

                {
                    Array(5).fill(0).map((_, i) => {
                        return <div key={i} className='w-[300px]'>
                            <div className="flex gap-2 items-center justify-start text-sm mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                                </svg>
                                ox145n.....k7258
                            </div>
                            <div className="flex gap-4 items-center border border-secondary py-1 px-2 rounded-lg justify-center">
                                <div className="flex gap-2">
                                    {
                                        [1, 2, 3, 4, 5, 6].map((item) => digit(item))

                                    }
                                </div>
                            </div>
                        </div>
                    })

                }
            </div>
            <div className="mt-7 mb-3 text-center">
                <button className="btn-outline-dark text-xs">Confirm and Buy</button>
            </div>
        </Modal>
    )
}

export default DrawModal