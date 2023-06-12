/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'
import TableLayout from '../common/TableLayout'

const players = [
    {
        id: '0x0...52De',
        date: '2023 D6 D2 16 35:42',
        purchase: '100',
        weight: '100',
    },
    {
        id: '0xA...9339',
        date: '2023 D6 D2 16 35:42',
        purchase: '102',
        weight: '102',
    },
    {
        id: '0x0...D074',
        date: '2023 D6 D2 16 35:42',
        purchase: '104',
        weight: '104',
    },
    {
        id: '0x0...D074',
        date: '2023 D6 D2 16 35:42',
        purchase: '104',
        weight: '104',
    },

]

const winners = [
    {
        id: '0x0...52De',
        date: '2023 D6 D2 16 35:42',
        rewards: '100',
    },
    {
        id: '0xA...9339',
        date: '2023 D6 D2 16 35:42',
        rewards: '102',
    },
    {
        id: '0x0...D074',
        date: '2023 D6 D2 16 35:42',
        rewards: '104',
    },
    {
        id: '0x0...D074',
        date: '2023 D6 D2 16 35:42',
        rewards: '104',
    },

]

const Lottery = () => {
    const [gradientColors, setGradientColors] = useState([]);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div>
            <div className='min-h-[85vh] flex justify-center items-end airdrop-top relative text-white'>
                <div className="overlay">
                </div>
                <video className='w-full h-full object-cover absolute -z-10' autoPlay loop muted>
                    <source src='/assets/videos/lottery.mp4' type='video/mp4' />
                </video>
                <div className="container z-10 text-center w-[700px] mb-10">
                    <div className="text-6xl text-center  m-auto ">$3410650.401</div>
                    <div className='text-white text-xl mt-2'>Total Rewards Distributed</div>
                    <p className='my-7'>When you buy $100–$1000 worth of Aidrip through Camelot, youll get a ticket that is weighted in accordance with your purchase. Distribution of ARB airdrops will occur every 30 minutes. The algorithm is open source. Good luck!</p>
                    <button className='btn'>View Rules</button>

                </div>
            </div>

            <div className="my-28 container space-y-5">
                <TableLayout title="Statics" >
                    <div className="grid grid-cols-4 py-10 gap-4 font-bold">
                        <div className='px-5 text-center'>
                            <div className="text-base text-secondary font-medium">Total Distribution</div>
                            <div className="text-lg">2740261.794</div>
                        </div>
                        <div className='px-5 text-center'>
                            <div className="text-base text-secondary font-medium">Current Round of Bid</div>
                            <div className="text-lg">3.197</div>
                        </div>
                        <div className='px-5 text-center'>
                            <div className="text-base text-secondary font-medium">Total Payer</div>
                            <div className="text-lg">23058</div>
                        </div>
                        <div className='px-5 text-center'>
                            <div className="text-base text-secondary font-medium">Total Winner</div>
                            <div className="text-lg">1209</div>
                        </div>
                    </div>
                </TableLayout>
                <div className="grid grid-cols-2 gap-5">
                    <TableLayout title="My Wallet" >
                        <div className="py-10 text-center">
                            <img src="/assets/images/logo.png" alt="icon" className="w-28 inline-block" />
                            <div className="mt-1">0.000Aidrip</div>
                            <button className='btn mt-5 w-[400px]'>Buy Aidrip</button>
                        </div>
                    </TableLayout>

                    <TableLayout title="My Rewards" >
                        <div className="py-10 text-center">
                            <img src="/assets/images/nft.svg" alt="icon" className="w-10 h-10 inline-block" />
                            <div className="mt-1">0.000 ARB</div>
                            <button className='btn mt-5 w-[400px]'>View</button>
                        </div>
                    </TableLayout>
                    <TableLayout title="Recent Players" >
                        <div className="py-7">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left">
                                        <th className="px-5 py-3 text-secondary font-medium">Players</th>
                                        <th className="px-5 py-3 text-secondary text-center font-medium">Purchase</th>
                                        <th className="px-5 py-3 text-secondary text-center font-medium">Weight</th>
                                        <th className="px-5 py-3 text-secondary text-center font-medium">Tx</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {players.map((item, index) => (
                                        <tr key={index} className="">
                                            <td className="px-5 py-3">
                                                <div className="flex items-center justify-start">
                                                    {/* generate Random colors circle */}
                                                    <div className="w-10 h-10 rounded-full" style={{ background: getRandomColor() }}></div>

                                                    <div className="ml-3">
                                                        <div className="text-base font-medium">{item.id}</div>
                                                        <div className="text-sm text-secondary/60">{item.date}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3 text-center">
                                                <div className="text-base font-medium">{item.purchase}</div>
                                            </td>
                                            <td className="px-5 py-3 text-center">
                                                <div className="text-base font-medium">{item.weight}</div>
                                            </td>
                                            <td className="px-5 py-3">
                                                <div className="text-base font-medium">
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

                    </TableLayout>
                    <TableLayout title="Recent Winners" >
                        <div className="py-7">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left">
                                        <th className="px-5 py-3 text-secondary font-medium">Players</th>
                                        <th className="px-5 py-3 text-secondary text-center font-medium">Rewards</th>
                                        <th className="px-5 py-3 text-secondary text-center font-medium">Tx</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {winners.map((item, index) => (
                                        <tr key={index} className="">
                                            <td className="px-5 py-3">
                                                <div className="flex items-center justify-start">
                                                    {/* generate Random colors circle */}
                                                    <div className="w-10 h-10 rounded-full" style={{ background: getRandomColor() }}></div>

                                                    <div className="ml-3">
                                                        <div className="text-base font-medium">{item.id}</div>
                                                        <div className="text-sm text-secondary/60">{item.date}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-3 text-center">
                                                <div className="text-base font-medium">{item.rewards}</div>
                                            </td>
                                            <td className="px-5 py-3">
                                                <div className="text-base font-medium">
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

                    </TableLayout>
                </div>
            </div>

        </div>
    )
}

export default Lottery