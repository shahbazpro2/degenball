/* eslint-disable @next/next/no-img-element */
'use client'
import Modal from '@/components/common/Modal'
import React from 'react'

const ConfirmModal = (props) => {
    const { allSelectedNumbers } = props

    return (
        <Modal {...props} >
            <div className="flex justify-end mb-3">
                <div className="cursor-pointer" onClick={props.closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-3">
                    <img src="/assets/images/prize.svg" alt="prize" className='w-8 h-8' />
                    <div className="text-center text-3xl">
                        Draw # 33
                    </div>

                </div>
                <div className="flex justify-center items-center">
                    <img src="/assets/images/ethereum.svg" alt="ethereum" className='w-8 h-8' />
                    <div className="text-2xl text-center">10 ETH</div>

                </div>
            </div>
            <hr className="my-5" />
            <ul className="space-y-3">
                <li className="flex justify-between items-center">
                    <div className="text-base">Total Cost</div>
                    <div className="text-base text-end">0.1 ETH</div>
                </li>
                <li className="flex justify-between items-center">
                    <div className="text-base">Your Tickets</div>
                    <div className="text-base text-end">({allSelectedNumbers?.length})</div>
                </li>
            </ul>
            <div className="px-10 mt-4">
                {allSelectedNumbers.map((item, index) => {
                    return (
                        <div key={index} className="mt-2 space-y-2">
                            <div className="flex gap-4 items-center border border-secondary py-1 px-2 rounded-lg">
                                <div>#{index + 1}</div>
                                <div className="flex gap-2">
                                    {
                                        item.map((subItem) =>
                                            <div key={subItem} className="bg-primary font-bold text-white w-9 h-9 flex items-center justify-center rounded-lg">{subItem}</div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mt-7 mb-3 text-center">
                <button className="btn-outline-dark text-xs">Confirm and Buy</button>
            </div>
        </Modal>
    )
}

export default ConfirmModal