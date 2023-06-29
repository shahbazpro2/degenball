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

const PrizeOdds = () => {
  return (
    <div className="bg-white py-5 lg:py-20" id="prizes">
      <div className="container">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
          <div className="lg:col-span-4">
            <img src="/assets/images/DEGEN_BALL.png" alt="degen ball" className='m-auto' />
          </div>
          <div className="lg:col-span-8">
            <div className="text-5xl font-bold">Prize and Odds</div>
            <div className="mt-4 text-lg">Based on transparency, anonymity, security, and fairness, Ridotto is a fully scalable alternative to centralized gambling.</div>
            <div className="mt-7 border rounded-xl bg-primary/5">

              <div className=" overflow-auto py-5">
                <table className='w-[500px] md:w-full'>
                  <thead>
                    <tr className="text-left">
                      <th className="px-5 py-3 font-medium">Digits Matched</th>
                      <th className="px-5 py-3 font-medium">Price Pool Allocation</th>
                      <th className="px-5 py-3 font-medium">Current Prizes</th>
                      <th className="px-5 py-3 font-medium">ODDS</th>
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
                          {item.matches}
                        </td>
                        <td className="px-5 py-3">
                          <div>{item.pricePool}</div>
                        </td>
                        <td className="px-5 py-3">
                          <div>
                            {item.winners}
                          </div>
                        </td>
                        <td className="px-5 py-3">
                          <div>
                            {item.odds}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PrizeOdds