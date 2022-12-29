import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faGear, faHouse, faMagnifyingGlass, faPodcast, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="icons hidden lg:flex lg:w-[5%] lg:h-[90%] lg:flex-col lg:items-center">
      <ul className="absolute top-[12%] flex flex-col items-center space-y-5">
        <li><FontAwesomeIcon icon={faHouse} className="text-xl text-white" /></li>
        <li><FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl text-white" /></li>
      </ul>
      <ul className="absolute top-[32%] flex flex-col items-center space-y-5">
        <li><FontAwesomeIcon icon={faBookOpen} className="text-xl text-white" /></li>
        <li><FontAwesomeIcon icon={faPodcast} className="text-xl text-white" /></li>
      </ul>
      <ul className="absolute bottom-[3%] flex flex-col items-center space-y-5">
        <li><FontAwesomeIcon icon={faUser} className="text-xl text-white" /></li>
        <li><FontAwesomeIcon icon={faGear} className="text-xl text-white" /></li>
      </ul>
    </div>
  )
}

export default Sidebar