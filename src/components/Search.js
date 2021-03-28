import React from 'react'

const Search = (props) => {
    return (
    <div className="container">
        <form>
            <div className="mb-3">
                 <label for="searchInput" className="form-label">Search</label>
                <input 
                type="search" 
                className="form-control" 
                id="searchInput" 
                aria-describedby="seacrhHelp" />
                <div id="seacrhHelp" className="form-text">Search for an Employee</div>
             </div>
            <button 
                type="submit" 
                onClick={props.handleSubmit} 
                className="btn btn-primary">Submit
         </button>
        </form>  
    </div>  
    )
}

export default Search
