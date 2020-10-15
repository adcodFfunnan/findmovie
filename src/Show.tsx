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
                    <Redirect exact from="/findmovie/" to="/tvshows" />

                    <Route path="/movies">
                        <div className="Header">
                            <Navbar />
                            <SearchInput searchInput={searchInput}
                                handleChange={handleChange} />
                        </div>
                        <ShowMovies searchInput={searchInput} />
                    </Route>

                    <Route path="/tvshows">
                        <div className="Header">
                            <Navbar />
                            <SearchInput searchInput={searchInput}
                                handleChange={handleChange} />
                        </div>
                        <ShowTV searchInput={searchInput} />
                    </Route>

                    <Route path="/details" component={ShowDetails} />

                </Switch>

            </Router>

        </div>
    )
}

function Navbar() {
    const [faIconClassName, setClassName] = useState("NavBar");

    const faClick = (event: React.MouseEvent<HTMLElement>): void => {
        (faIconClassName == "NavBar") ?
            setClassName("NavBar" + " SlideNavBar") :
            setClassName("NavBar");
    }

    return (
        <div className="NavBarDiv">
            <i className="fa fa-bars" onClick={faClick}></i>
            <h1 className="Title">Find Movie</h1>
            <img className="TitleIMG" src={logo} />
            <nav className={faIconClassName}>
                <NavLink onClick={faClick} to="/movies" className="NavLink" activeClassName="Selected">Movies</NavLink>
                <NavLink onClick={faClick} to="/tvshows" className="NavLink" activeClassName="Selected">TV Shows</NavLink>
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
                onChange={props.handleChange} />


        </div>
    );
}

export { Show }