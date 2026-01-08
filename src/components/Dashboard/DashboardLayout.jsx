import React, { useState } from 'react'
import Graph from './Graph'
import { dummyData } from '../../dummyData/data'
import { useStoreContext } from '../../contextApi/ContextApi'
import { useFetchMyShortUrls, useFetchTotalClicks } from '../../hooks/useQuery'
import ShortenPopUp from './ShortenPopUp'
import { FaLink } from 'react-icons/fa'
import ShortenUrlList from './ShortenUrlList'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'

const DashboardLayout = () => {
    // const refetch = false;
    const { token } = useStoreContext();
    const navigate = useNavigate();
    const [shortenPopUp, setShortenPopUp] = useState(false);

    // console.log(useFetchTotalClicks(token, onError));

    const {isLoading, data: myShortenUrls, refetch } = useFetchMyShortUrls(token, onError)
    
    const {isLoading: loader, data: totalClicks} = useFetchTotalClicks(token, onError)

    function onError() {
      navigate("/error");
    }

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)] bg-[var(--color-bg-primary)]">
  {loader ? (
    <Loader />
  ) : (
    <div className="lg:w-[90%] w-full mx-auto py-14">

      {/* GRAPH CARD */}
      <div className="h-96 relative rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
        {totalClicks.length === 0 && (
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-lg font-semibold text-[var(--color-text-primary)]">
              No Data For This Time Period
            </h1>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-sm">
              Share your short link to start tracking engagements
            </p>
          </div>
        )}
        <Graph graphData={totalClicks} />
      </div>

      {/* CREATE BUTTON */}
      <div className="py-6 sm:text-end text-center">
        <button
          className="px-5 py-2 rounded-md text-sm font-medium 
                     bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]
                     transition-colors"
          onClick={() => setShortenPopUp(true)}
        >
          Create New Short URL
        </button>
      </div>

      {/* URL LIST */}
      <div>
        {!isLoading && myShortenUrls.length === 0 ? (
          <div className="flex justify-center pt-16">
            <div className="flex items-center gap-2 px-6 py-4 rounded-md
                            bg-[var(--color-bg-card)]
                            border border-[var(--color-border)]">
              <h1 className="text-sm font-medium text-[var(--color-text-primary)]">
                You haven’t created any short links yet
              </h1>
              <FaLink className="text-[var(--color-accent)]" />
            </div>
          </div>
        ) : (
          <ShortenUrlList data={myShortenUrls} />
        )}
      </div>
    </div>
  )}

  <ShortenPopUp
    refetch={refetch}
    open={shortenPopUp}
    setOpen={setShortenPopUp}
  />
</div>

  )
}

export default DashboardLayout