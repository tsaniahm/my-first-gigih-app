import axios from "axios";
import { useEffect, useState } from "react";
import Gif from "../home/gif.tsx";
import Navbar from "../navbar/navbar";
import styles from "../../styles/style.module.css"

const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

const TrendingPage = () => {
    const [trendGIF, setTrendGIF] = useState([])

    useEffect(() => {
        async function getAPi() {
            const url = `http://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_KEY}`;
            try {
                const response = await axios.get(url);
                setTrendGIF(response.data.data)
                console.log(response)

            } catch (error) {
                console.error(error);
            }
        }
        getAPi()
    }, [])

    return (
        <div className="trending-container">
            <Navbar />
            <div className="trending-title">
                <ul>
                    <li><img src="images/trend.png" alt="#" /></li>
                    <li><h2>TRENDING GIFs</h2></li>
                </ul>
            </div>
            <div className={styles.gifContainer}>
                {
                    trendGIF.length > 0 && trendGIF.map((e) =>
                        <Gif
                            imageUrl={e.images.fixed_width.url}
                            title={e.title}
                            rating={e.rating}
                            key={e.id}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default TrendingPage;