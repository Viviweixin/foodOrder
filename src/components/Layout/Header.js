import classes from './Header.module.css';
import React, { Fragment } from 'react';
import mealsImage from '../../assets/pexels.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="meals"/>
            </div>
        </Fragment>
    )
}
export default Header;