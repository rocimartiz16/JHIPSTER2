import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';

export const LiderMenu = props => (
    // tslint:disable-next-line:jsx-self-close
    <NavDropdown icon="th-list" name={translate('global.menu.lider.main')} id="entity-menu">
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
        <DropdownItem tag={Link} to="/entity/resultados-vistos">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.resultadosVistos" />
        </DropdownItem>
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
        <DropdownItem tag={Link} to="/entity/version-horario">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.versionHorario" />
        </DropdownItem>
        <DropdownItem tag={Link} to="/entity/horario">
            <FontAwesomeIcon icon="asterisk" fixedWidth />
            &nbsp;
            <Translate contentKey="global.menu.lider.horario" />
        </DropdownItem>
        {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </NavDropdown>
);

export default LiderMenu;
