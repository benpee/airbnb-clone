import React, { useState } from 'react';
import Search from './Search';
import classes from './Banner.module.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Banner() {
    const [showsearch, setShowsearch] = useState(false);
    const history = useHistory()

    const searchHandler = () => {
        setShowsearch(!showsearch);
    }
    return (
        <div className={classes.banner}>
            <div className={classes.banner__search}>
                {showsearch && <Search />}
                <Button
                    className={classes.banner__searcButton}
                    variant="outlined"
                    onClick={searchHandler}
                >
                    {showsearch ? 'Hide' : 'Show Dates'}
                </Button>
            </div>
            <div className={classes.banner__info}>
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you. </h5>
                <Button
                    variant="outlined"
                    onClick={() => history.push('/search')}
                >
                    Explore Nearby
                </Button>
            </div>
            <Search />
        </div>
    )
}

export default Banner
