import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
} from "react-router-dom";

import { ShowMovies } from './ShowMovies';
import { ShowTV } from './ShowTV';
import { ShowDetails } from './ShowDetails';
import searchIMG from './Icons/search.png';
import logo from './Icons/cinema.png'


interface EventT {
    target: { value: string }
}

function Show() {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e: EventT) => { setSearchInput(e.target.value); }

    return (
        <div>
            <Router>
                <Switch>
                    <Redirect exact from="http://adcodFfunnan.github.io/findmovie" to="/findmovie/tvshows" />

                    <Route path="/findmovie/movies">
                        <div className="Header">
                        <Navbar />
                        <SearchInput searchInput={searchInput}
                            handleChange={handleChange} />
                            </div>
                        <ShowMovies searchInput={searchInput} />
                    </Route>

                    <Route path="/findmovie/tvshows">
                    <div className="Header">
                        <Navbar />
                        <SearchInput searchInput={searchInput}
                            handleChange={handleChange} />
                            </div>
                        <ShowTV searchInput={searchInput} />
                    </Route>

                    <Route path="/findmovie/details" component={ShowDetails} />

                </Switch>

            </Router>

        </div>
    )
}

function Navbar() {
    return (
        <div>
            <h1 className="Title">Find Movie</h1>
            <img className="TitleIMG" src={logo}/>
            <nav className="NavBar">
                <ul>
                    <li>
                        <NavLink to="/movies" className="NavLink" activeClassName="selected">Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tvshows" className="NavLink" activeClassName="selected">TV Shows</NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

function SearchInput(props: {
    searchInput: string,
    handleChange: any
}) {
    return (
        <div className="InputDiv">
            <img src={searchIMG}
                className="SearchIMG" />
            <input type="text" spellCheck="false"
                placeholder='Search'
                value={props.searchInput}
                onChange={props.handleChange}/>
                
           
        </div>
    );
}

export { Show }