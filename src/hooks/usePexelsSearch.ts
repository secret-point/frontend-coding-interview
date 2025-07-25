import { useEffect, useState } from "react";
import pexelsApi from "../services/pexelsApi";
import type { PexelsSearchResponse } from "../types/pexels";

export function usePexelsSearch(url: string) {
  const [data, setData] = useState<PexelsSearchResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const res = await pexelsApi.get<PexelsSearchResponse>(url);
        if (mounted) {
          setData(res.data);
        }
      } catch (err) {
        if (mounted) setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
