package co.edu.sena.ghostceet.domain;

import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(VinculacionInstructor.class)
public abstract class VinculacionInstructor_ {

	public static volatile SetAttribute<VinculacionInstructor, DisponibilidadCompetencias> disponibilidadCompetencias;
	public static volatile SingularAttribute<VinculacionInstructor, Instructor> instructor;
	public static volatile SingularAttribute<VinculacionInstructor, Anio> anio1;
	public static volatile SingularAttribute<VinculacionInstructor, ZonedDateTime> fechaInicio;
	public static volatile SingularAttribute<VinculacionInstructor, Vinculacion> vinculacion;
	public static volatile SingularAttribute<VinculacionInstructor, Long> id;
	public static volatile SetAttribute<VinculacionInstructor, DisponibilidadHoraria> disponibilidadHorarias;
	public static volatile SingularAttribute<VinculacionInstructor, ZonedDateTime> fechaFin;

}

