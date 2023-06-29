/* eslint-disable @next/next/no-img-element */
import React from 'react'

const tickets = [
  {
    id: 1,
    matches: 'Match First 1',
    pricePool: '40%',
    winners: '6 ETH',
    odds: '1 in 1M'
  },
  {
    id: 2,
    matches: 'Match First 2',
    pricePool: '10 ETH',
    winners: '95 ETH',
    odds: '1 in 1M'
  },
  {
    id: 3,
    matches: 'Match First 3',
    pricePool: '10 ETH',
    winners: '95 ETH',
    odds: '1 in 1M'
  },
]

const About = () => {
  return (
    <div className="bg-white py-20" id="about">
      <div className="container">
        <div className='grid lg:grid-cols-12 gap-10'>
          <div className="lg:col-span-8">
            <div className="text-5xl font-bold">About Us</div>
            <div className="mt-4">Truly Desterilized lottery Powered by</div>
            <div className="my-7 flex gap-10">
              <div className='flex flex-col items-center'>
                <img src="/assets/images/chainlink.png" alt="chainlink" className='w-10' />
                <div className="mt-3 font-bold">Chainlink</div>
              </div>
              <div className='flex flex-col items-center'>
                <img src="/assets/images/lido.png" alt="lido" className='w-10' />
                <div className="mt-3 font-bold">Lido</div>
              </div>
              <div className='flex flex-col items-center'>
                <img src="/assets/images/aave.png" alt="aave" className='w-10' />
                <div className="mt-3 font-bold">Aave</div>
              </div>
            </div>
            <div className="mt-5 text-lg">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Prasollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pra
            </div>
          </div>
          <div className="lg:col-span-4">
            <img src="/assets/images/DEGEN_BALL_2.png" alt="degen ball" className='m-auto' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default About