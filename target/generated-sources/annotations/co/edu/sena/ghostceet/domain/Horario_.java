package co.edu.sena.ghostceet.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Horario.class)
public abstract class Horario_ {

	public static volatile SingularAttribute<Horario, ZonedDateTime> horaFin;
	public static volatile SingularAttribute<Horario, Instructor> instructor;
	public static volatile SingularAttribute<Horario, Modalidad> modalidad;
	public static volatile SingularAttribute<Horario, Ambiente> ambiente;
	public static volatile SingularAttribute<Horario, FichaTrimestre> fichaTrimestre;
	public static volatile SingularAttribute<Horario, VersionHorario> versionHorario;
	public static volatile SingularAttribute<Horario, Long> id;
	public static volatile SingularAttribute<Horario, Dia> dia;
	public static volatile SingularAttribute<Horario, ZonedDateTime> horaInicio;

}

