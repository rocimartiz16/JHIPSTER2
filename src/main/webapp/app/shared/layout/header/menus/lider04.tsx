import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';
import AdminMenu from 'app/shared/layout/header/menus/admin';

export const Lider04Menu = props => (
    <NavDropdown icon="user-plus" name={translate('global.menu.instructor.complementos')} style={{ width: '140%' }} id="instructor-menu">
        <DropdownItem tag={Link} to="/entity/planeacion-actividad">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.planeacionActividad" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/vinculacion">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.vinculacion" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/anio">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.anio" />
        </DropdownItem>

        <DropdownItem tag={Link} to="/entity/disponibilidad-competencias">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.disponibilidadCompetencias" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/disponibilidad-horaria">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.disponibilidadHoraria" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/tipo-ambiente">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.tipoAmbiente" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/sede">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.sede" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/ambiente">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.ambiente" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/limitacion-ambiente">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.limitacionAmbiente" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/modalidad">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.modalidad" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/dia">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.dia" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/trimestre-vigente">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.trimestreVigente" />
        </DropdownItem>
    </NavDropdown>
);
export default Lider04Menu;
