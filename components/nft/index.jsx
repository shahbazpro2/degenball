/* eslint-disable react/no-unescaped-entities */
'use client'
import Card from '@/components/common/Card'
import React, { useState } from 'react'
import Card3 from '../common/Card3'

const cardData = [
    {
        id: 0,
        video: '/assets/videos/nft.mp4',
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',

    },
    {
        id: 1,
        video: '/assets/videos/nft.mp4',
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 2,
        video: '/assets/videos/nft.mp4',
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 3,
        video: '/assets/videos/nft.mp4',
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 4,
        video: '/assets/videos/nft.mp4',
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
    {
        id: 5,
        video: '/assets/videos/nft.mp4',
        account: '0x0000000000',
        deposits: '10 000 DRIP',
        net_positive: 'yes',
        airdrop: '1500',
    },
]

const Nft = () => {

    const [selectedAll, setSelectedAll] = useState([])

    const handleSelectAll = () => {
        if (selectedAll.length === cardData.length) {
            setSelectedAll([])
        } else {
            setSelectedAll(cardData.map((item) => item.id))
        }
    }

    return (
        <div>
            <div className='min-h-[85vh] flex justify-center items-end  airdrop-top relative text-white'>
                <div className="overlay">
                </div>
                <video className='w-full h-full object-cover absolute -z-10' autoPlay loop muted>
                    <source src='/assets/videos/nft.mp4' type='video/mp4' />
                </video>
                <div className="container z-10 text-center mb-10">
                    <div className="text-6xl text-center w-[700px] m-auto">
                        NFT Airdrop
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="my-20 grid grid-cols-4 gap-7">
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[200px] text-xl'>
                        NFT Supply
                    </div>
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[200px] text-xl'>
                        Average Daily Rewards
                    </div>
                    <div className='rounded-lg border border-primary bg-white flex justify-center items-center min-h-[200px] text-xl'>
                        Your Share
                    </div>
                    <div className='rounded-lg border border-primary bg-white flex flex-col space-y-4 justify-center items-center min-h-[200px] text-xl'>
                        <div> Your Rewards</div>
                        <button className='btn'>Claim</button>
                    </div>

                </div>
            </div>
            <div className="my-28 container">
                <div className="text-4xl mb-10">MY NFTs ({cardData?.length})</div>
                <div className="grid grid-cols-6 gap-4">
                    {
                        cardData.map((item, index) => {
                            return <Card3 key={index} data={item} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Nft