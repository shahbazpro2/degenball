import React from 'react'
import Card2 from '../common/Card2'

const cardData = [
    {
        title: 'Stake',
        description: 'Stake your DRIP tokens to earn more DRIP tokens',
        video: '/assets/videos/stake.mp4',
        active: true
    },
    {
        title: 'Lottery',
        description: 'Lottery your DRIP tokens to earn more DRIP tokens',
        video: '/assets/videos/lottery.mp4',
        active: true
    },
    {
        title: 'NFTs',
        description: 'NFTs your DRIP tokens to earn more DRIP tokens',
        video: '/assets/videos/nft.mp4',
        active: true
    },
    {
        title: 'Play',
        description: 'Coming Soon',
        active: false
    }
]

const Stake = () => {
    return (
        <div>
            <div className='min-h-[85vh] flex justify-center items-center airdrop-top relative text-white'>
                <div className="overlay">
                </div>
                <video className='w-full h-full object-cover  absolute -z-10' autoPlay loop muted>
                    <source src='/assets/videos/stake.mp4' type='video/mp4' />
                </video>
                <div className="container z-10 ">
                    <div className="grid grid-cols-2 gap-7">
                        <div className="col-span-2 flex justify-center">
                            <div className=" bg-primary/70 text-white rounded-md p-5 text-2xl text-center space-y-3">
                                <div className=''>
                                    TVL
                                </div>
                                <div className='text-secondary font-bold'>
                                    $0.00
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className=" bg-black/90 border border-primary/40 text-white rounded-md px-14 py-10  text-2xl text-center">
                                <div className=''>
                                    Single Staking
                                </div>
                                <div className="mt-5">
                                    <button className='py-1 px-10 rounded-md text-sm bg-primary'>Buy RAB</button>
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
                            <div className=" bg-black/90 border-primary/40 border text-white rounded-md px-14 py-10  text-2xl text-center">
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
        </div>
    )
}

export default Stake