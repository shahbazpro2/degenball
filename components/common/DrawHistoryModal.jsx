/* eslint-disable @next/next/no-img-element */
'use client'
import Modal from '@/components/common/Modal'
import React from 'react'
import { digit } from './PickModal'

const tickets = [
    {
        id: 1,
        matches: 'Match First 1',
        pricePool: '10 ETH',
        winners: '95 ETH'
    },
    {
        id: 2,
        matches: 'Match First 2',
        pricePool: '10 ETH',
        winners: '95 ETH'
    },
    {
        id: 3,
        matches: 'Match First 3',
        pricePool: '10 ETH',
        winners: '95 ETH'
    },
]

const DrawHistoryModal = (props) => {

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
                <div className="text-center text-2xl font-bold">
                    Draw # 33
                </div>

            </div>
            <div className="flex flex-col gap-3 md:flex-row justify-between">
                <div className="mt-2">Drawn: Jun 1, 2023, 7:00 PM</div>
                <div className='text-center md:text-start'>
                    <div>Jackpot</div>
                    <div className="flex justify-center items-center">
                        <img src="/assets/images/ethereum.svg" alt="ethereum" className='w-8 h-8' />
                        <div className="text-2xl text-center">10 ETH</div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 md:flex-row justify-between mt-5">
                <div>
                    <div className="my-2 text-start text-lg font-bold">Winning Numbers</div>
                    <div className="flex gap-2 justify-start">
                        {
                            [1, 2, 3, 4, 5, 6].map((item) => digit(item))

                        }
                    </div>
                </div>
                <div className='text-center md:text-start'>
                    <div>Payout</div>
                    <div className="flex justify-center items-center">
                        <img src="/assets/images/ethereum.svg" alt="ethereum" className='w-8 h-8' />
                        <div className="text-2xl text-center">10 ETH</div>

                    </div>
                </div>
            </div>
            <hr className="my-5" />
            <div className='m-auto text-center'>
                <div className="font-bold text-xl">DRAW DETAILS</div>
                <div className="grid grid-cols-2 md:grid-cols-3 mt-2 gap-2">
                    <div className="flex items-center gap-3">
                        <div>
                            <img src="/assets/images/users.svg" alt="users" className='w-8 h-8' />
                        </div>
                        <div className="text-xs text-start">
                            <div className="font-bold">400</div>
                            <div>Total Players</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <img src="/assets/images/two_tickets.svg" alt="users" className='w-8 h-8' />
                        </div>
                        <div className="text-xs text-start">
                            <div className="font-bold">555</div>
                            <div>Total Tickets</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div>
                            <img src="/assets/images/trophy.svg" alt="users" className='w-8 h-8' />
                        </div>
                        <div className="text-xs text-start">
                            <div className="font-bold">35</div>
                            <div>Winning Tickets</div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-5" />
            <div className="h-[180px] overflow-auto space-y-3 py-2">

                <table className="w-[300px] md:w-full">
                    <thead>
                        <tr className="text-left">
                            <th className="px-5 py-3 font-medium">Matches</th>
                            <th className="px-5 py-3 font-medium">Price Pool</th>
                            <th className="px-5 py-3 font-medium">Winners</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tickets?.length === 0 && <tr className="text-sm">
                                <td className="px-5 py-3">
                                    No tickets yet
                                </td>
                            </tr>

                        }
                        {tickets.map((item, index) => (
                            <tr key={index} className="text-sm">
                                <td className="px-5 py-3">
                                    {item.matches}
                                </td>
                                <td className="px-5 py-3">
                                    <div>{item.pricePool}</div>
                                </td>
                                <td className="px-5 py-3">
                                    <div>
                                        {item.winners}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <div className="mt-7 mb-3 text-center">
                <button className="btn-outline-dark text-xs">Confirm and Buy</button>
            </div>
        </Modal>
    )
}

export default DrawHistoryModal