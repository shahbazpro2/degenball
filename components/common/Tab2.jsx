/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const tickets = [
    {
        id: 1,
        draw: 'Draw 1',
        date: 'Ongoing',
        tickets: 5
    },
    {
        id: 2,
        draw: 'Draw 2',
        date: 'Ongoing',
        tickets: 5
    },
    {
        id: 3,
        draw: 'Draw 3',
        date: 'Ongoing',
        tickets: 5
    },
]


const Tab2 = () => {



    return (
        <>

            <div className=" overflow-auto py-5">
                <table className='w-[500px] md:w-full'>
                    <thead>
                        <tr className="text-left">
                            <th className="px-5 py-3 font-medium">Draw</th>
                            <th className="px-5 py-3 font-medium">Date</th>
                            <th className="px-5 py-3 font-medium">Tickets</th>
                            <th className="px-5 py-3 font-medium"></th>
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
                                    <div>{item.tickets}</div>
                                </td>
                                <td className="px-5 py-3 text-end">
                                    <div>
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                    </svg>
                    ox145n.....k7258
                </div>
                <div className="mt-3">
                    <button className="btn-simple text-sm" >Buy Ticket</button>
                </div>
            </div>
        </>


    )
}

export default Tab2