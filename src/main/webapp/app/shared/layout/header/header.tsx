import './header.css';

import React from 'react';
import { Translate, Storage } from 'react-jhipster';
import { Navbar, Nav, NavbarToggler, NavbarBrand, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';

import { Home, Brand } from './header-components';
import {
    AdminMenu,
    EntitiesMenu,
    AccountMenu,
    LocaleMenu,
    LiderMenu,
    Lider01Menu,
    Lider02Menu,
    Lider03Menu,
    Lider04Menu,
    InstructorMenu
} from './menus';

export interface IHeaderProps {
    isAuthenticated: boolean;
    isAdmin: boolean;
    isLider: boolean;
    isInstructor: boolean;
    ribbonEnv: string;
    isInProduction: boolean;
    isSwaggerEnabled: boolean;
    currentLocale: string;
    onLocaleChange: Function;
}

export interface IHeaderState {
    menuOpen: boolean;
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
    state: IHeaderState = {
        menuOpen: false
    };

    handleLocaleChange = event => {
        const langKey = event.target.value;
        Storage.session.set('locale', langKey);
        this.props.onLocaleChange(langKey);
    };

    renderDevRibbon = () =>
        this.props.isInProduction === false ? (
            <div className="ribbon dev">
                <a href="">
                    <Translate contentKey={`global.ribbon.${this.props.ribbonEnv}`} />
                </a>
            </div>
        ) : null;

    toggleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };

    render() {
        const { currentLocale, isAuthenticated, isAdmin, isLider, isSwaggerEnabled, isInProduction, isInstructor } = this.props;

        /* jhipster-needle-add-element-to-menu - JHipster will add new menu items here */

        return (
            <div id="app-header">
                {this.renderDevRibbon()}
                <LoadingBar className="loading-bar" />
                <Navbar dark expand="sm" fixed="top" className="jh-navbar">
                    <NavbarToggler aria-label="Menu" onClick={this.toggleMenu} />
                    <Brand />
                    <Collapse isOpen={this.state.menuOpen} navbar>
                        <Nav id="header-tabs" className="ml-auto" navbar>
                            <Home />

                            {isAuthenticated && isLider && <Lider01Menu />}
                            {isAuthenticated && isLider && <Lider02Menu />}
                            {isAuthenticated && isLider && <Lider03Menu />}
                            {isAuthenticated && isLider && <Lider04Menu />}
                            {isAuthenticated && isAdmin && <EntitiesMenu/>}
                            {isAuthenticated && isInstructor && <InstructorMenu/>}
                            {isAuthenticated && isAdmin && <AdminMenu showSwagger={isSwaggerEnabled} />}
                            <LocaleMenu currentLocale={currentLocale} onClick={this.handleLocaleChange} />
                            <AccountMenu isAuthenticated={isAuthenticated} />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
