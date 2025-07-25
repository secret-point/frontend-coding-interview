import { useMemo } from "react";
import { usePexelsSearch } from "../../hooks/usePexelsSearch";
import PhotoCard from "./components/PhotoCard";
import { storage } from "../../utils/storage";
import { DEFAULT_PER_PAGE, INITIAL_PEXELS_QUERY } from "../../utils/constant";

const LIKES_KEY = "liked_photos_v1";

export default function Photos() {
  const searchParams = new URLSearchParams({
    query: INITIAL_PEXELS_QUERY,
    per_page: DEFAULT_PER_PAGE.toString(),
  });

  const endpoint = `search?${searchParams.toString()}`;
  const { data, loading, error } = usePexelsSearch(endpoint);

  const liked = useMemo<number[]>(() => storage.get(LIKES_KEY) ?? [], []);

  const toggleLike = (id: number) => {
    const current = storage.get<number[]>(LIKES_KEY) ?? [];
    const next = current.includes(id)
      ? current.filter((x) => x !== id)
      : [...current, id];

    storage.set(LIKES_KEY, next);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white w-full">
      <main className="max-w-2xl w-full mx-auto px-4 pb-16">
        <h2 className="mt-6 text-2xl font-semibold text-left text-gray-800">
          All Photos
        </h2>

        {loading && (
          <div className="mt-10 text-center text-gray-500">Loading…</div>
        )}

        {!!error && (
          <div className="mt-10 text-center text-red-500">
            Sorry, something went wrong.
          </div>
        )}

        {data?.photos.length ? (
          <div className="mt-4">
            {data.photos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                initiallyLiked={liked.includes(photo.id)}
                onToggleLike={toggleLike}
              />
            ))}
          </div>
        ) : (
          !loading &&
          !error && (
            <div className="mt-10 text-center text-gray-400">
              No photos found.
            </div>
          )
        )}
      </main>
    </div>
  );
}
