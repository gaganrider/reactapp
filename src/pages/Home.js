import React from 'react'
import Feed from '../comps/Feed'
import Homel from '../comps/Homel'
import Homer from '../comps/Homer'
import Navbar from '../comps/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="homediv">
        <Homel/>
        <Feed/>
        <Homer/>
      </div>
    </div>
  )
}

export default Home
