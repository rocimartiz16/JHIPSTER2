import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';

export const Lider01Menu = props => (
    <NavDropdown icon="user-plus" name={translate('global.menu.instructor.miHorario')} style={{ width: '140%' }} >
        <DropdownItem tag={Link} to="/entity/version-horario">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.versionHorario" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/planeacion">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.planeacion" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/nivel-formacion">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.nivelFormacion" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/programa">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.programa" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/proyecto">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.proyecto" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/competencia">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.competencia" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/resultado-aprendizaje">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.resultadoAprendizaje" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/jornada">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.jornada" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/horario">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.horario" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/trimestre">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.trimestre" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/planeacion-trimestre">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.planeacionTrimestre" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/fase-proyecto">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.faseProyecto" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/actividad-proyecto">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.actividadProyecto" />
        </DropdownItem>

        <DropdownItem tag={Link} to="/entity/resultados-vistos">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.resultadosVistos" />
        </DropdownItem>
    </NavDropdown>
);
export default Lider01Menu;
