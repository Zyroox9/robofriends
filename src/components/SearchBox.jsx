import React from 'react';

function SearchBox( {searchChange, searchField} ) {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange={searchChange}
                value={searchField}
            />
        </div>
    );
  }
  
  export default SearchBox;
  