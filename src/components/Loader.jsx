import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
        <div className="flex flex-col items-center gap-1">
        <InfinitySpin
                  width="100"
                  color="#fff"
                />
        </div>
    </div>
  )
}

export default Loader