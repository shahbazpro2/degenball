/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { digit } from './PickModal'
import DrawHistoryModal from './DrawHistoryModal'

const tickets = [
    {
        id: 1,
        draw: 'Draw 1',
        date: 'Jan 1, 2023 12:00 AM UTC',
        tickets: [1, 2, 4, 5, 6, 7],
        prizePot: 100
    },
    {
        id: 2,
        draw: 'Draw 2',
        date: 'Jan 1, 2023 12:00 AM UTC',
        tickets: [1, 2, 4, 5, 6, 7],
        prizePot: 100
    },
    {
        id: 3,
        draw: 'Draw 3',
        date: 'Jan 1, 2023 12:00 AM UTC',
        tickets: [1, 2, 4, 5, 6, 7],
        prizePot: 100
    },

]


const Tab3 = () => {
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)


    return (
        <div >
            <div className=" overflow-auto py-5">
                <table className='w-[1000px] md:w-full'>
                    <thead>
                        <tr className="text-left">
                            <th className="px-5 py-3 font-medium">Draw</th>
                            <th className="px-5 py-3 font-medium">Date</th>
                            <th className="px-5 py-3 font-medium">Tickets</th>
                            <th className="px-5 py-3 font-medium">Prize Pot</th>
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
                                    {item.draw}
                                </td>
                                <td className="px-5 py-3">
                                    <div>{item.date}</div>
                                </td>
                                <td className="px-5 py-3">
                                    <div className="flex gap-2">
                                        {item.tickets.map((ticket, index) => (
                                            digit(ticket)
                                        ))}
                                    </div>
                                </td>
                                <td className="px-5 py-3 text-end">
                                    <div className='flex gap-2 cursor-pointer' onClick={() => setIsHistoryModalOpen(true)}>
                                        <div>{item.prizePot}ETH</div>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            className="mx-auto text-primary"
                                            height="20"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" />
                                            </g>
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <div className="mt-10 text-center">
                <div className="flex gap-2 items-center justify-center text-sm">
                    Buy Tickets For Next Round
                </div>
                <div className="mt-3">
                    <button className="btn-simple text-sm" >Buy Ticket</button>
                </div>
            </div>

            {
                isHistoryModalOpen && <DrawHistoryModal isOpen={isHistoryModalOpen} closeModal={() => setIsHistoryModalOpen(false)} />
            }
        </div>


    )
}

export default Tab3