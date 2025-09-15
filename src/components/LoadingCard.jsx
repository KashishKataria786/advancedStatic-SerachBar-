import React from 'react'

const LoadingCard = () => {
  return (
    <div className="py-4 flex items-center gap-4 border-b border-gray-300 px-6  bg-gray-100">
        <div>
            <img className="h-[50px] w-[40px] rounded-xl bg-gray-400 animate-pulse" src=""/>
        </div>
      <div className="text-left space-y-3 ">
        <h3 className="text-sm font-semibold rounded-xl h-[16px]  text-gray-400 bg-gray-400 animate-pulse ">A normal Text just to show bar</h3>
        <p className="text-sm font-md  rounded-xl h-[16px]  text-gray-400  bg-gray-400 animate-pulse"  >A normal Text </p>
      </div>
    </div>
  )
}

export default LoadingCard
