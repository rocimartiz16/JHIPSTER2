import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';
import AdminMenu from 'app/shared/layout/header/menus/admin';

export const Lider02Menu = props => (
    <NavDropdown icon="user-plus" name={translate('global.menu.instructor.main')} style={{ width: '140%' }} id="instructor-menu">
        <DropdownItem tag={Link} to="/entity/instructor">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.instructor" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/vinculacion-instructor">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.vinculacionInstructor" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/jornada-instructor">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.jornadaInstructor" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/dia-jornada">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.diaJornada" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/area">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.area" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/area-instructor">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.areaInstructor" />
        </DropdownItem>
    </NavDropdown>
);
export default Lider02Menu;
