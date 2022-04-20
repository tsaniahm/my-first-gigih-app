
const SearchBar = ({ handleInputChange, handleSearch , input}) => {
    return (
        <div className="search-section">
            <form onSubmit={handleSearch}>
                <input
                    type='text' 
                    name='searchInput' 
                    placeholder='Search Here' 
                    onChange={handleInputChange} 
                    value={input}
                    required
                />
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    )
}
export default SearchBar;