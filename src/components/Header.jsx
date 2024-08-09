import React from 'react'

export default function Header() {
  return (
    <header>
        <div className="fixed top-0 right-0 z-40 flex items-center justify-between p-2 px-6 text-white bg-[#273c51]  left-[216px]">
        <div className="text-2xl font-bold">
          <span className='italic'>Stake</span>
        </div>
        <div className="flex items-center px-4 py-2 bg-gray-800 rounded-lg">
          <span className="mr-2">0.00000000</span>
          <span className="mr-2">₿</span>
          <button className="px-4 py-2 bg-blue-500 rounded-lg">Wallet</button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>🔍</span>
            <span>Search</span>
          </div>
          <div className="cursor-pointer">👤</div>
          <div className="cursor-pointer">🔔</div>
          <div className="cursor-pointer">💬</div>
        </div>
      </div>
    </header>
    
  )
}
