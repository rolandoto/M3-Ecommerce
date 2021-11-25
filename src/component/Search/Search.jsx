import React from "react";


const Search =({serch,handeSerach, searchinput,})=>{
    return (
        <div>
            <input type="text" value={serch} onChange={handeSerach} ref={searchinput    } />
        </div>
    )
} 

export default Search