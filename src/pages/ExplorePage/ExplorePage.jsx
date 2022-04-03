import "./ExplorePage.css";
import { useEffect } from "react";
import {
  useFetchingData,
  useLikeActions,
  useVideoHistory,
} from "../../utilities/CustomHooks";
import { useDataValues } from "../../contextAndReducers/DataProvider";
import { FilterArea } from "../../components/FilterArea/FilterArea";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { Loader } from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import { PlayListModal } from "../../components/PlayListModal/PlayListModal";
function ExplorePage() {
  const { fetchData, fetchCategoriesData } = useFetchingData();
  const { state, dispatch, setModalDisplay, modalDisplay } = useDataValues();
  const { getLikedVideos } = useLikeActions();
  const { getHistory } = useVideoHistory();
  useEffect(() => {
    fetchData();
    fetchCategoriesData();
    getLikedVideos();
    getHistory();
  }, []);
  return (
    <div>
      <FilterArea />

      {state.loader && (
        <div className="flex-center height-100">
          <Loader />
        </div>
      )}
      {!state.loader && (
        <div className="Explore-main">
          {state.data.map((item) => (
            <VideoCard
              key={item._id}
              contentPhoto={item.thumbnail.url}
              contentPhotoAlt={item.thumbnail.altText}
              creatorPhoto={item.creatorLogo.url}
              creatorPhotoAlt={item.creatorLogo.altText}
              thumbNail={item.title}
              creatorName={item.creator}
              id={item._id}
              obj={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export { ExplorePage };
