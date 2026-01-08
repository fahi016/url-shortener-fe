import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

export const useFetchMyShortUrls = (token, onError) => {
  return useQuery({
    queryKey: ["my-shortenurls", token],

    queryFn: async () => {
      const response = await api.get(
        "/api/urls/myurls",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },

    select: (data) => {
      // Backend sends an array like: [{ id, originalUrl, shortUrl, ... }]
      const list = Array.isArray(data) ? data : data?.data || [];

      const sortedData = list.slice().sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );

      return sortedData;
    },
    staleTime: 5 * 1000,
    onError,
  });
};


export const useFetchTotalClicks = (token, onError) => {
  return useQuery({
    queryKey: ["url-totalclick", token],

    queryFn: async () => {
      const response = await api.get(
        "/api/urls/totalClicks?startDate=2025-12-01&endDate=2026-12-07",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },

    select: (data) => {
      return Object.keys(data).map((key) => ({
        clickDate: key,
        count: data[key],
      }));
    },
    staleTime: 5 * 1000,
    onError,
  });
};
