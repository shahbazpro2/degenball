/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import PickModal from './PickModal'
import ConfirmModal from './ConfirmModal'



const Tab1 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isConfirmModalOpen, setIsConfirmModal] = useState(false)
    const [allSelectedNumbers, setAllSelectedNumbers] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const onRemove = (index) => {
        setAllSelectedNumbers(allSelectedNumbers.filter((item, i) => i !== index))
    }

    const onEdit = (index) => {
        setIsOpen(true)
        setEditIndex(index)
    }

    const onCloseModal = () => {
        setIsOpen(false)
        setEditIndex(null)
    }

    const generateRandomNumber = () => {
        let sixRandom = []
        while (sixRandom.length < 6) {
            const num = Math.floor(Math.random() * 48) + 1
            if (!sixRandom.includes(num)) {
                sixRandom.push(num)
            }
        }
        if (allSelectedNumbers.some((item) => item.every((num) => sixRandom.includes(num)))) {
            generateRandomNumber()
            return
        }
        return sixRandom
    }

    const onRandom = (num) => {
        let allRandom = []
        for (let i = 0; i < num; i++) {
            const randomNum = generateRandomNumber()
            allRandom.push(randomNum)
        }
        setAllSelectedNumbers([...allSelectedNumbers, ...allRandom])
    }

    const onClearAll = () => {
        setAllSelectedNumbers([])
    }


    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="text-lg font-medium mb-1">Choose Your Number</div>
                <div className="flex gap-2">
                    <div className="flex justify-center items-center gap-1">
                        <img src="/assets/images/ethereum.svg" alt="ethereum" className='w-4 h-4' />
                        <div className="text-sm text-center">0.01 ETH Per Ticket</div>
                    </div>
                    {
                        allSelectedNumbers.length > 0 &&
                        <div className="flex justify-center items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="text-sm text-center">Show {allSelectedNumbers?.length} tickets</div>
                        </div>
                    }
                </div>
                {
                    allSelectedNumbers.map((item, index) => {
                        return (
                            <div key={index} className="mt-2 space-y-2">
                                <div className="flex gap-3 justify-between items-center border border-secondary py-1 px-2 rounded-lg">
                                    <div>#{index + 1}</div>
                                    <div className="flex gap-2">
                                        {
                                            item.map((subItem) =>

                                                <div key={subItem} className=" bg-primary font-bold text-white w-9 h-9 flex items-center justify-center rounded-lg">{subItem}</div>

                                            )

                                        }
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <div className="cursor-pointer" onClick={() => onEdit(index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                            </svg>
                                        </div>
                                        <div className="cursor-pointer" onClick={() => onRemove(index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <img src="/assets/images/dice.svg" alt="dice" className='w-5 h-5' />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


                {allSelectedNumbers?.length === 0 ? <button className=' text-sm btn-outline-dark mt-4 flex gap-2 items-center' onClick={() => setIsOpen(true)}>
                    <img src="/assets/images/dice.svg" alt="dice" className='w-4 h-4' />
                    Pick Your Own Number</button> :
                    <div className="flex gap-1 items-center cursor-pointer mt-4" onClick={() => setIsOpen(true)}>
                        <div className="cursor-pointer" onClick={() => onEdit(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                        </div>
                        <div className="text-base">Add your next ticket</div>
                    </div>
                }
                <div className="relative w-full flex justify-center items-center my-10">
                    <hr className='w-full' />
                    <button className='btn-simple text-xs flex gap-2 items-center absolute -top-4 z-10'>
                        <img src="/assets/images/dice.svg" alt="dice" className='w-4 h-4' />
                        Quick Picks</button>
                </div>
                <div className="flex gap-3 justify-center">
                    <div className=" bg-white font-bold text-black w-7 h-7 flex items-center justify-center rounded-lg cursor-pointer" onClick={() => onRandom(1)}>
                        1
                    </div>
                    <div className=" bg-white font-bold text-black w-7 h-7 flex items-center justify-center rounded-lg cursor-pointer" onClick={() => onRandom(2)}>
                        2
                    </div>
                    <div className=" bg-white font-bold text-black w-7 h-7 flex items-center justify-center rounded-lg cursor-pointer" onClick={() => onRandom(3)}>
                        3
                    </div>
                </div>
                {
                    allSelectedNumbers.length > 0 &&
                    <div className="flex gap-2 text-xs items-center mt-3 cursor-pointer" onClick={onClearAll}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="underline">Clear All</div>

                    </div>
                }
                {
                    allSelectedNumbers.length > 0 ?
                        <div className="mt-10">
                            <button className="btn-simple" onClick={() => setIsConfirmModal(true)}>Buy Ticket</button>
                        </div> :
                        <div className="mt-10">
                            <button className="btn">Connect Wallet</button>
                        </div>
                }




            </div>


            {
                isOpen &&
                <PickModal isOpen={isOpen} closeModal={onCloseModal} setAllSelectedNumbers={setAllSelectedNumbers} allSelectedNumbers={allSelectedNumbers} editIndex={editIndex} setEditIndex={setEditIndex} />
            }
            {
                isConfirmModalOpen && <ConfirmModal isOpen={isConfirmModalOpen} closeModal={() => setIsConfirmModal(false)} allSelectedNumbers={allSelectedNumbers} />
            }
        </>
    )
}

export default Tab1