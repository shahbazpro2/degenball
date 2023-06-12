/* eslint-disable react/no-unescaped-entities */
'use client'
import Card from '@/components/common/Card'
import React, { useState } from 'react'

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

const Airdrop = () => {

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
            <div className='min-h-[85vh] flex justify-center items-center airdrop-top relative text-white'>
                <div className="overlay">
                </div>
                <video className='w-full h-full object-cover absolute -z-10' autoPlay loop muted>
                    <source src='/assets/videos/airdrop.mp4' type='video/mp4' />
                </video>
                <div className="container z-10 text-center">
                    <div className="text-6xl text-center w-[700px] m-auto">Burn your NFT's to claim your AIRDIP</div>
                    <div className="my-10 flex gap-5 items-center justify-center">
                        <div className='text-primary text-3xl '>Referral reward:</div>
                        <div className='text-xl'> XXXX AID RIP</div>
                    </div>
                    <a href="#nft" className='btn'>Claim</a>

                </div>
            </div>

            <div className="my-28 container" id="nft">
                <div className="text-4xl">MY NFTs</div>
                <div className="flex items-center justify-between my-5">
                    <div className="flex items-center mb-3">
                        <div className="text-small cursor-pointer pr-5" onClick={handleSelectAll}>Select All {selectedAll.length ? `(${selectedAll.length})` : ''}</div>
                        <input type="checkbox" className='checkbox' checked={selectedAll.length === cardData.length} onChange={handleSelectAll} />
                    </div>
                    <div>
                        <button className='bg-primary py-2 px-5 rounded-md text-white'>Claim XXX AIDRIP</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {
                        cardData.map((item, index) => {
                            return <Card key={index} data={item} selectedAll={selectedAll} setSelectedAll={setSelectedAll} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Airdrop