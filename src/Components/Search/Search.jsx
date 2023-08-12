import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Search.css"
// .search-popUp {}
const Search = () => {
  return (
    <div className='search-popUp'>
    <input type='search' placeholder='Type To Search'/>
    <FontAwesomeIcon icon={faMagnifyingGlass} />
    <Link to="/" className='exit'><FontAwesomeIcon icon={faCircleXmark} /></Link>

    </div>
  )
}


export default Search