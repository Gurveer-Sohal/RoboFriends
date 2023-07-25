import React from 'react';
import './SearchBox.css'


const SearchBox = ({searchChange}) => {
    return (
        <div className='searchDiv'>   
        <input
            className='searchInput'
            type='text' 
            placeholder='Search Robots...'
            onChange={searchChange}
        />  
        </div>
        
    );
}

export default SearchBox;