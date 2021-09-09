import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
// import SearchIcon from '@material-ui/icons/Search';
// import LanguageIcon from '@material-ui/icons/Language';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import {Avatar} from '@material-ui/core';

function Header() {
    return (
        <div className={classes.header}>
            <Link to="/">
                <img
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    className={classes.header__icon}
                    alt="Airbnb logo"
                />
            </Link>

            <div className={classes.header__center}>
                <input type="text" />
                {/* <SearchIcon className={classes.icon} /> */}
            </div>
            <div className={classes.header__right}>
                <p>Become an host</p>
                {/* <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar /> */}
            </div>
        </div>
    )
}

export default Header
