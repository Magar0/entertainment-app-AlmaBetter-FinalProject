import movieIcon from "../assets/trending-assets/movieIcon.svg";
import playIcon from "../assets/playIcon.svg";
import BookmarkBtn from "./bookmarkBtn/BookmarkBtn";

const Trending = ({ trending }) => {
  return (
    <div className="trendingLogo relative w-full min-w-[240px] max-h-[140px] lg:w-[470px] lg:max-h-[230px]">
      <img
        src={`https://image.tmdb.org/t/p/w500${trending.backdrop_path}`}
        alt={trending.title}
        className=" w-full h-full rounded-lg "
      />
      {console.log(trending.mediaType)}
      <BookmarkBtn movie={trending} mediaType={trending.media_type === "movie" ? "movies" : "tvseries"} />
      <img
        src={playIcon}
        alt="Bookmark Icon"
        className="playIcon absolute top-[15%] right-[35%] w-20 h-20 cursor-pointer lg:top-[35%] lg:right-[40%]"
      />
      <div className="flex flex-col absolute bottom-4 left-4 z-10">
        <div className="flex gap-x-4 font-light text-xs">
          <p>
            {trending.release_date?.slice(0, 4) ||
              trending.first_air_date?.slice(0, 4) ||
              "N/A"}
          </p>
          <div className="flex gap-x-1">
            <div className="flex gap-x-2">
              <p className="opacity-50">•</p>
              <img src={movieIcon} alt="Movie Icon" />
            </div>
            <p>{trending.media_type}</p>
          </div>
        </div>
        <h2 className="text-[15px] font-medium mt-1">
          {trending.title ? trending.title : trending.original_name}
        </h2>
      </div>
    </div>
  );
};

export default Trending;
//
