import "./ExplorePage.css";
import { useEffect } from "react";
import { useFetchingData } from "../../utilities/CustomHooks";
import { useDataValues } from "../../contextAndReducers/DataProvider";
import { FilterArea } from "../../components/FilterArea/FilterArea";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { Loader } from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
function ExplorePage() {
  const { fetchData } = useFetchingData();
  const { state, dispatch } = useDataValues();
  useEffect(() => {
    fetchData();
    console.log("run");
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
            <Link to="/singleVideo-page" key={item._id}>
              <VideoCard
                contentPhoto={item.thumbnail.url}
                contentPhotoAlt={item.thumbnail.altText}
                creatorPhoto={item.creatorLogo.url}
                creatorPhotoAlt={item.creatorLogo.altText}
                thumbNail={item.title}
                creatorName={item.creator}
                id={item._id}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export { ExplorePage };
