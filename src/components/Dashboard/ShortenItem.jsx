import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FaExternalLinkAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { IoCopy } from 'react-icons/io5';
import { LiaCheckSolid } from 'react-icons/lia';
import { MdAnalytics, MdOutlineAdsClick } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { useStoreContext } from '../../contextApi/ContextApi';
import { InfinitySpin } from 'react-loader-spinner';
import Graph from './Graph';

const ShortenItem = ({
  originalUrl,
  shortUrl,
  clickCount,
  createdDate,
}) => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  const [analyticToggle, setAnalyticToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [analyticsData, setAnalyticsData] = useState([]);

  const [selectedUrl, setSelectedUrl] = useState();


    const subDomain = import.meta.env.VITE_REACT_FRONT_END_URL.replace(
        /^https?:\/\//,
        ""
      );
  const analyticsHandler = (shortUrl) => {
    console.log("Analytics button clicked for:", shortUrl);
    if (!analyticToggle) {
      setSelectedUrl(shortUrl);
    }
    setAnalyticToggle(!analyticToggle);
  };

  const fetchMyShortUrl = async () => {
    console.log("Fetching analytics for:", selectedUrl);
    setLoader(true);
    try {
      const { data } = await api.get(
        `/api/urls/analytics/${selectedUrl}?startDate=2024-12-01T00:00:00&endDate=2026-12-31T23:59:59`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      );
      setAnalyticsData(data);
      setSelectedUrl('');
      console.log("Analytics response:", data);
    } catch (error) {
      console.error("Analytics API error:", error);
      navigate('/error');
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (selectedUrl) {
      console.log("selectedUrl changed:", selectedUrl);
      fetchMyShortUrl();
    }
  }, [selectedUrl]);

  return (
    <div
  className="border rounded-md px-6 py-4 transition-colors"
  style={{
    background: "var(--color-bg-card)",
    borderColor: "var(--color-border)",
    fontFamily: "var(--font-montserrat)",
  }}
>
  <div className="flex sm:flex-row flex-col sm:justify-between gap-6">

    {/* LEFT */}
    <div className="flex-1 overflow-hidden">
      <div className="flex items-center gap-2">
        {/* <a
          href={`${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-sm text-[var(--color-accent)]"
        >
          {subDomain}/{shortUrl}
        </a> */}
        <Link
          target = '_'
          className="font-semibold text-sm text-[var(--color-accent)]"
          to={import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${shortUrl}`}>
                  {subDomain + "/s/" + `${shortUrl}`}
                  </Link>

        <FaExternalLinkAlt className="text-[var(--color-accent)] text-xs" />
      </div>

      <p className="text-xs mt-1 text-[var(--color-text-secondary)] truncate">
        {originalUrl}
      </p>

      <div className="flex gap-6 pt-4 text-sm">
        <div className="flex items-center gap-1 text-[var(--color-accent)]">
          <MdOutlineAdsClick />
          {clickCount} {clickCount === 1 ? "Click" : "Clicks"}
        </div>

        <div className="flex items-center gap-1 text-[var(--color-text-secondary)]">
          <FaRegCalendarAlt />
          {dayjs(createdDate).format("MMM DD, YYYY")}
        </div>
      </div>
    </div>

    {/* ACTIONS */}
    <div className="flex items-center gap-3">
      <CopyToClipboard
        onCopy={() => setIsCopied(true)}
        text={`${import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${shortUrl}`}`}
      >
        <button className="px-4 py-2 text-xs rounded-md
                           bg-[var(--color-bg-secondary)]
                           border border-[var(--color-border)]
                           hover:bg-[var(--color-bg-primary)]">
          {isCopied ? "Copied" : "Copy"}
        </button>
      </CopyToClipboard>

      <button
        onClick={() => analyticsHandler(shortUrl)}
        className="px-4 py-2 text-xs rounded-md
                   bg-[var(--color-accent)]
                   hover:bg-[var(--color-accent-hover)]"
      >
        Analytics
      </button>
    </div>
  </div>

  {/* ANALYTICS PANEL */}
<div
  className={`${analyticToggle ? "block" : "hidden"}
  h-64 sm:h-72 mt-5 relative border-t border-[var(--color-border)] overflow-hidden`}
>
    {loader ? (
      <div className="h-64 flex items-center justify-center">
        <InfinitySpin width="80" color="#28a745" />
      </div>
    ) : (
      <>
        {analyticsData.length === 0 && (
          <div className="text-center text-sm text-[var(--color-text-secondary)] py-12">
            No analytics data available
          </div>
        )}
        <Graph graphData={analyticsData} />
      </>
    )}
  </div>
</div>

  );
};

export default ShortenItem;
