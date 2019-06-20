package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Instructor.class)
public abstract class Instructor_ {

	public static volatile SingularAttribute<Instructor, Cliente> cliente;
	public static volatile SingularAttribute<Instructor, Estado> estado;
	public static volatile SetAttribute<Instructor, DisponibilidadCompetencias> disponibilidadCompetencias;
	public static volatile SetAttribute<Instructor, AreaInstructor> areaInstructors;
	public static volatile SetAttribute<Instructor, Horario> horarios;
	public static volatile SingularAttribute<Instructor, Long> id;
	public static volatile SetAttribute<Instructor, VinculacionInstructor> vinculacionInstructors;
	public static volatile SetAttribute<Instructor, DisponibilidadHoraria> disponibilidadHorarias;

}

