/* eslint-disable @next/next/no-img-element */
import React from 'react'

const tickets = [
  {
    id: '21-88-0921360',
    id2: '21-88-0921360',
    winners: '24 ETH',
  },
  {
    id: '21-88-0921360',
    id2: '21-88-0921360',
    winners: '24 ETH',
  },
  {
    id: '21-88-0921360',
    id2: '21-88-0921360',
    winners: '24 ETH',
  },
]

const RecentWinners = () => {
  return (
    <div className="bg-white py-20" id="winners">
      <div className="container">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
          <div className="lg:col-span-4">
            <img src="/assets/images/DEGEN_BALL_3.png" alt="degen ball" className='m-auto' />
          </div>
          <div className="lg:col-span-8 lg:order-2 order-first">
            <div className="text-5xl font-bold">Recent Winners</div>
            <div className="mt-4 text-lg">Based on transparency, anonymity, security, and fairness, Ridotto is a fully scalable alternative to centralized gambling.</div>
            <div className="mt-7 border rounded-xl bg-primary/5">

              <div className=" overflow-auto py-5">
                <table className='w-[500px] md:w-full'>

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
                        <td className="px-5 py-3 flex items-center gap-1">
                          <img src="/assets/images/cat_profile.svg" alt="profile" className='w-7 rounded-full' />
                          {item.id}
                        </td>
                        <td className="px-5 py-3 ">
                          <div className='flex items-center gap-2'>
                            <div className="bg-[#9BE9F2] p-1 rounded-lg">22</div>
                            {item.id2}</div>
                        </td>
                        <td className="px-5 py-3">
                          <div className='flex items-center gap-2'>
                            <img src="/assets/images/ethereum.svg" alt="ethereum" className='w-7 rounded-full' />
                            {item.winners}</div>
                        </td>
                        <td className="px-5 py-3">
                          <img src="/assets/images/Logout.svg" alt="logout" className='m-auto w-5' />
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

export default RecentWinners