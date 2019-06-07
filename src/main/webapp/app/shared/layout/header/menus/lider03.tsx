import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';
import AdminMenu from 'app/shared/layout/header/menus/admin';

export const Lider03Menu = props => (
    <NavDropdown icon="user-plus" name={translate('global.menu.instructor.ficha')} style={{ width: '140%' }} id="instructor-menu">
        <DropdownItem tag={Link} to="/entity/estado-ficha">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.estadoFicha" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/ficha">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.ficha" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/ficha-trimestre">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.fichaTrimestre" />
        </DropdownItem>
    </NavDropdown>
);
export default Lider03Menu;
