import React from 'react'
import {Link}  from '@reach/router'
import './Autocomplete.css'

const AutocompleteItem = ({ id, name, image, price }) => {

  return (
    <li>
        <Link to={`/Detail/${id}`} >
          <div className='flex-Autocomplete'>
              <a className='hover:bg-blue-300 flex gap-4 p-4'>
              <img src={image} alt={image} className='image-search' />
              <div className='flex-'>
                  <h3 className='text-sm font-semibold'>{name}</h3>
                  <p className='text-xs text-gray-600'>${price}</p>
              </div>
              </a>
          </div>   
        </Link>
    </li>
  )
}

export default AutocompleteItem