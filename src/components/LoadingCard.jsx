import React from 'react'

const LoadingCard = () => {
  return (
    <div className="p-3 flex rounded-xl items-center bg-gray-300 gap-4 border-b-1 border-gray-200 mx-4  ">
        <div>
            <img className="h-[50px] w-[40px] rounded-xl bg-gray-400 animate-pulse" src=""/>
        </div>
      <div className="text-left space-y-3 ">
        <h3 className="text-sm font-semibold rounded-xl  text-gray-400 bg-gray-400 animate-pulse ">A normal Text just to show bar</h3>
        <p className="text-sm font-md  rounded-xl   text-gray-400  bg-gray-400 animate-pulse"  >A normal Text </p>
      </div>
    </div>
  )
}

export default LoadingCard
