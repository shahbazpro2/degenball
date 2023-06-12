import React from 'react'
import Card2 from '../common/Card2'



const Stake = () => {
    return (
        <div>
            <div className='min-h-[85vh] flex justify-center items-center airdrop-top relative text-white'>
                <div className="overlay">
                </div>
                <video className='w-full h-full object-cover  absolute -z-10' autoPlay loop muted>
                    <source src='/assets/videos/stake.mp4' type='video/mp4' />
                </video>
                <div className="container z-10 text-center w-[700px]">
                    <div className="text-6xl text-center  m-auto">Stake and earn drip </div>
                    <div className=" bg-primary/0 text-white rounded-md p-5 text-2xl text-center space-y-3 w-[25%] m-auto mt-7">
                        <div className=''>
                            TVL
                        </div>
                        <div className='font-bold text-4xl text-primary'>
                            $0.00
                        </div>
                    </div>
                    <a href="#stake" className="btn mt-10">Stake</a>
                </div>
            </div>
            <div className="container z-10 mb-32 mt-28">
                <div className="grid grid-cols-2 gap-7">
                    <div className="col-span-1" id="stake">
                        <div className=" bg-black/90 border-[3px] border-primary text-white rounded-md px-14 py-10  text-2xl text-center">
                            <div className=''>
                                Single Staking
                            </div>
                            <div className="mt-5">
                                <button className='py-1 px-10 rounded-md text-sm bg-primary'>Buy Aidrip</button>
                            </div>
                            <div className="mt-5 grid grid-cols-2 gap-3 text-lg">
                                <div className='text-left'>
                                    APR:
                                </div>
                                <div className="text-end">
                                    327%
                                </div>
                                <div className='text-left'>
                                    APY:
                                </div>
                                <div className="text-end">
                                    2,506%
                                </div>
                                <div className='text-left'>
                                    Deposit:
                                </div>
                                <div className="text-end">
                                    RAB
                                </div>
                                <div className='text-left'>
                                    Earn:
                                </div>
                                <div className="text-end">
                                    RAB
                                </div>
                                <div className='text-left'>
                                    Your Balance:
                                </div>
                                <div className="text-end">
                                    0.000 RAB
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className="btn text-sm">Approve</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className=" bg-black/90 border-[3px] border-primary text-white rounded-md px-14 py-10  text-2xl text-center">
                            <div className=''>
                                LP Staking
                            </div>
                            <div className="mt-5">
                                <button className='py-1 px-10 rounded-md text-sm bg-primary'>Get RAB-ETH LP</button>
                            </div>
                            <div className="mt-5 grid grid-cols-2 gap-3 text-lg">
                                <div className='text-left'>
                                    APR:
                                </div>
                                <div className="text-end">
                                    1,633%
                                </div>
                                <div className='text-left'>
                                    APY:
                                </div>
                                <div className="text-end">
                                    865,649,986%
                                </div>
                                <div className='text-left'>
                                    Deposit:
                                </div>
                                <div className="text-end">
                                    RAB-ETH LP
                                </div>
                                <div className='text-left'>
                                    Earn:
                                </div>
                                <div className="text-end">
                                    RAB
                                </div>
                                <div className='text-left'>
                                    Your Balance:
                                </div>
                                <div className="text-end">
                                    0.000 RAB-ETH LP
                                </div>
                            </div>
                            <div className="mt-5">
                                <button className="btn text-sm">Approve</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Stake