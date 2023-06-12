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

const Home = () => {
    return (
        <div>
            <div className='min-h-[85vh] flex justify-center items-center airdrop-top relative text-white'>
                <div className="overlay">
                </div>
                <video className='w-full h-full object-cover  absolute -z-10' autoPlay loop muted>
                    <source src='/assets/videos/homepage.mp4' type='video/mp4' />
                </video>
                <div className="container z-10 ">
                    <div className='flex flex-col items-start'>
                        <div className='w-[600px] space-y-7'>
                            <div className="text-6xl">AirDrip</div>
                            <p className='text-2xl font-light'>
                                AirDrip is a decentralized finance (DeFi) protocol that allows users to earn interest on their cryptocurrency by depositing it into one of several pools supported by the platform. Interest rates are determined algorithmically based on supply and demand. Users can deposit and withdraw their funds at any time, subject to a 24-hour waiting period.
                            </p>
                            <button className='btn'>Buy</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="my-20 grid grid-cols-6 gap-7">
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[100px] text-xl'>
                        Current Price
                    </div>
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[100px] text-xl'>
                        Total Supply
                    </div>
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[100px] text-xl'>
                        Burned Supply
                    </div>
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[100px] text-xl'>
                        Market Cap
                    </div>
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[100px] text-xl'>
                        Total Rewarded
                    </div>
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[100px] text-xl'>
                        Sent to Vault
                    </div>
                </div>
            </div>
            <div className="py-40 homecard">
                <div className="container">
                    <div className="grid grid-cols-4 gap-4" >
                        {
                            cardData.map((item, index) => (
                                <Card2 key={index} data={item} />
                            )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home