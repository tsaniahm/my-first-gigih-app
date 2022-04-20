import React, { useState } from "react";
import Gif from "./gif.tsx";
import axios from "axios";
import SearchBar from "./searchBar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResult } from "../store/searchResultSlice";
import Navbar from "../navbar/navbar";
import styles from "../../styles/style.module.css"

const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

const Index = () => {
    const dispatch = useDispatch()
    const search = useSelector((state) => state.searchResult.value);
    const [input, setInput] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        const url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${GIPHY_KEY}&limit=12`;
        try {
            const response = await axios.get(url);
            dispatch(setSearchResult(response.data.data))
            setIsSubmit(true)
            console.log(response.data.data)

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <React.Fragment>
            <Navbar />
            <div className="container">
                <SearchBar
                    handleInputChange={handleInputChange}
                    handleSearch={handleSearch}
                    input={input}
                />
            </div>
            {isSubmit ?
                <div className={styles.gifContainer}>
                    {
                        search.length > 0
                            ? search.map((e) =>
                                <Gif
                                    imageUrl={e.images.fixed_width.url}
                                    title={e.title}
                                    rating={e.rating}
                                    key={e.id}
                                />
                            ) :
                            <h3 className="not-found">
                                No Result Found for "{input}"!!, 
                                Please make sure your words spelled corectly or use less or different keywords. 
                            </h3>
                    }
                </div>
                : 
                <div className="header">
                </div>
            }
        </React.Fragment>
    )
}



export default Index;