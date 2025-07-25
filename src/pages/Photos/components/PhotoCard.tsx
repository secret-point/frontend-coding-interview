import type { PexelsPhoto } from "../../../types/pexels";
import Star from "../../../components/Star";
import { useState } from "react";
import linksIcon from "../../../assets/svg/links.svg";

type PhotoCardProps = {
  photo: PexelsPhoto;
  initiallyLiked?: boolean;
  onToggleLike: (id: number) => void;
};

export default function PhotoCard({
  photo,
  initiallyLiked,
  onToggleLike,
}: PhotoCardProps) {
  const [liked, setLiked] = useState<boolean>(Boolean(initiallyLiked));

  const handleLike = () => {
    setLiked((prev) => !prev);
    onToggleLike(photo.id);
  };

  return (
    <div className="flex gap-3 py-4">
      <div className="flex-shrink-0 pt-1">
        <Star filled={liked} onClick={handleLike} />
      </div>

      <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-gray-100">
        <img
          src={photo.src.medium}
          alt={photo.alt}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex items-start justify-between">
          <div className="flex flex-col flex-1 min-w-0 w-full">
            <p className="font-semibold text-gray-900 truncate">
              {photo.photographer}
            </p>
            <p className="text-sm text-gray-600 truncate">{photo.alt}</p>
          </div>
          <a
            href={photo.photographer_url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-brand hover:underline flex gap-1 items-center"
          >
            <img className="w-3 h-3" src={linksIcon} alt="Links Icon" />
            Portfolio
          </a>
        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <span>#{photo.id}</span>
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ backgroundColor: photo.avg_color }}
            title={photo.avg_color}
          />
        </div>
      </div>
    </div>
  );
}
