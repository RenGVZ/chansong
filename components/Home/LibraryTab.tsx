import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const LibraryTab = () => {
  return (
    <div className="library h-[200px] w-full flex flex-col shadow-cust rounded-[10px]">
      <div className="flex w-full justify-between py-4 items-center">
        <h1 className="text-lg uppercase pl-8">Library</h1>
        <div className="flex flex-row w-4/12 items-baseline space-x-4">
          <div className="flex w-8/12 items-center shadow-library-search rounded-full p-1.5">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xs text-mid px-2" />
            <p className="text-dark text-xs">Search</p>
          </div>
          <p className="text-dark">See More</p>
        </div>
      </div>
      <div className="tracks">
        {/* {savedTracks.map((SavedTracks: {track}) => (
        <div></div>
      ))} */}
      </div>
    </div>
  )
}

export default LibraryTab