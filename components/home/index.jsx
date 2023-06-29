/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Top1 from './Top1'
import Top2 from './Top2'
import PrizeOdds from './PrizeOdds'
import About from './About'
import RecentWinners from './RecentWinners'
import Faq from './Faq'

const Home = () => {
    const [active, setActive] = useState(0)



    const onSetActive = (type) => {
        if (type === 'prev') {
            if (active === 0) {
                setActive(topSections.length - 1)
            } else {
                setActive(active - 1)
            }
        }
        if (type === 'next') {
            if (active === topSections.length - 1) {
                setActive(0)
            } else {
                setActive(active + 1)
            }
        }
    }

    const topSections = [
        <Top1 onSetActive={onSetActive} />,
        <Top2 onSetActive={onSetActive} />,
    ]


    return (
        <div id="top">
            <div className='2xl:min-h-[85vh] flex justify-center items-center relative text-white py-32 2xl:py-52'>
                <div className="container">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {
                            topSections[active]
                        }
                    </div>
                </div>
            </div>
            <div className="bg-white py-20" id="play">
                <div className="container">
                    <div className='text-center lg:w-[700px] m-auto'>
                        <div className="text-5xl font-bold text-center">How to play?</div>
                        <div className="my-3 text-center text-xl">Based on transparency, anonymity, security, and fairness, Ridotto is a fully scalable alternative to centralized gambling.</div>
                    </div>
                    <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-7">
                        <div className='rounded-lg bg-[#D9F2FF] min-h-[300px] text-xl flex flex-col justify-center px-7 py-10 playbg'>
                            <img src="/assets/images/two_tickets.svg" alt="" className='w-[100px]' />
                            <div className="mt-5">
                                <div className="text-2xl">Buy Tickets</div>
                                <div className="mt-4 mb-10">
                                    Based on transparency, anonymity, security, and fairness, Ridotto is a fully scalable alternative to centralized gambling.
                                </div>
                            </div>
                        </div>
                        <div className='rounded-lg bg-[#EFECFF] min-h-[300px] text-xl flex flex-col justify-center px-7 py-10 playbg'>
                            <img src="/assets/images/sand_timer.svg" alt="" className='w-[100px]' />
                            <div className="mt-5">
                                <div className="text-2xl">Wait for the Draw</div>
                                <div className="mt-4 mb-10">
                                    Based on transparency, anonymity, security, and fairness, Ridotto is a fully scalable alternative to centralized gambling.
                                </div>
                            </div>
                        </div>
                        <div className='rounded-lg bg-[#FFEFD5] min-h-[300px] text-xl flex flex-col justify-center px-7 py-10 playbg'>
                            <img src="/assets/images/Dollar_circled.svg" alt="" className='w-[100px]' />
                            <div className="mt-5">
                                <div className="text-2xl">Check for the prize</div>
                                <div className="mt-4 mb-10">
                                    Based on transparency, anonymity, security, and fairness, Ridotto is a fully scalable alternative to centralized gambling.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PrizeOdds />
            <About />
            <RecentWinners />
            <Faq />
        </div>
    )
}

export default Home