import React from 'react'
import "./dashboard.scss"
import banner from "../../assets/banner2.png"
import Search from './Search/Search'
import Listcard from './ListCards/Listcard'
import { useGlobal } from '../Context/Context'
import { BiLogOut } from "react-icons/bi";
const Dashboard = () => {

  const {setSearchInput, error, filteredDrones, searchInput,handleLogout} = useGlobal();
 

  return (
    <>
    <section className='dashboard-container'>
      <div className='banner'>
      <div className="logout-container" onClick={handleLogout}>
        <p>
          <BiLogOut />
          <span>Log out</span>
        </p>
      </div>
        <img src={banner} alt=''/>
      </div>
      <div className='search-container'>
        <Search setSearchInput={setSearchInput} error={error} searchInput={searchInput}/>
      </div>
      <div className='cards-container'>
        <Listcard drones={filteredDrones}/>
      </div>
    </section>
    </>
  )
}

export default Dashboard