import React, { useState, useEffect } from 'react';
import { NavLink, } from "react-router-dom";

interface ResultsT {
    poster_path: string,
    name: string,
    id: number,
    overview: string,
    popularity: number,
}

function ShowTV(props: { searchInput: string }) {
    const [searchResults, setSearchResults] = useState<ResultsT[]>([]);

    const fetchAndSetResults = (searchInput: string) => {
        if (searchInput.length < 3) {
            let url = "https://api.themoviedb.org/3/tv/top_rated?api_key=3b3b21534bb573b2344025cd8e70c515&language=en-US&page=1";
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setSearchResults(data.results.slice(0, 10));
                });
        } else {
            let results: ResultsT[] = [], total_pages = 1;
            const fetchFun = (page: number) => {

                let url = "https://api.themoviedb.org/3/search/tv?api_key=3b3b21534bb573b2344025cd8e70c515&language=en-US&page=" + page + "&query="
                    + searchInput + "&include_adult=false";
                fetch(url)
                    .then(response => response.json())
                    .then(
                        data => {
                            results = results.concat(data.results);
                            total_pages = data.total_pages;
                            if (page <= total_pages && page <= 3) {
                                page++;
                                fetchFun(page);
                            } else {
                                results = results.filter(item =>
                                    item.poster_path != null);
                                setSearchResults(results);
                            }
                        });
            }
            fetchFun(1);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchAndSetResults(props.searchInput);
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className="MovieList">
            {searchResults.map(item =>
                <div className="ImgDiv">
                    <NavLink to={{
                        pathname: "/findmovie/details",
                        state: {
                            id: item.id,
                            poster_path: item.poster_path,
                            title: item.name,
                            overview: item.overview,
                            popularity: item.popularity,
                            sendFrom: "tvshows"

                        }
                    }}>
                        <img className="Image"
                            src={"http://image.tmdb.org/t/p/w185/" +
                                item.poster_path} />
                        <div className="ItemTitle">
                            <div className="TitleLeft">
                                <h3>{item.name}</h3>
                            </div>
                        </div>

                    </NavLink>
                </div>)}
        </div>

    );
}

export { ShowTV }