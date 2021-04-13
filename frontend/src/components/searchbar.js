import {useState} from 'react'

const SearchBar = ({blog, user}) => {
    let searchDom = document.querySelector('#query')
    let [query, editQuery] = useState('')
    const handleClick = (e) => {
        // e.preventDefault()
        if (searchDom.value){editQuery(searchDom.value)}
    }

    return ( 
        <div>
            <div className="mb-10 w-full flex justify-center">
            <input type="search" placeholder="Search Article" className="shadow-md focus:ring-2 focus:ring-blue-600 active:ring-blue-600 text-center border-solid py-2 px-4 text-gray-600" id="query" name="q" onKeyUpCapture={handleClick} />
            {/* <button className="py-2 px-4 ml-1 bg-blue-600 text-white rounded text-semibold" onKeyUp={handleClick} >Search</button> */}
            </div>
            <h2 className="text-center text-xl"> You searched for: {user} </h2>
        </div>
     );
}
 
export default SearchBar;