import { Scripts } from 'lucide-react';
import { useState } from 'react';


const SearchBar = ({ onSeacrh}) => {
    const [query, setQuery] = useState('');
    
    const handleSearch = (e) => {
        e.preventDefault();
        onSeacrh(query);
       
        }
   
    
    return (
        <form onSubmit={handleSearch} className="SearchBar">
       <div className='Search input group '>
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="border border-gray-300 rounded-l px-4 py-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
            {/* <Scripts className="h-5 w-5" /> */}
            <Scripts size = {20} />
        </button>
     </div>
        </form>
    );      
 };

 export default SearchBar;  