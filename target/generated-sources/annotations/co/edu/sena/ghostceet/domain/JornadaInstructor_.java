package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(JornadaInstructor.class)
public abstract class JornadaInstructor_ {

	public static volatile SingularAttribute<JornadaInstructor, String> descripcion;
	public static volatile SetAttribute<JornadaInstructor, DiaJornada> diaJornadas;
	public static volatile SingularAttribute<JornadaInstructor, Estado> estado;
	public static volatile SingularAttribute<JornadaInstructor, String> nombreJornada;
	public static volatile SingularAttribute<JornadaInstructor, Long> id;
	public static volatile SetAttribute<JornadaInstructor, DisponibilidadHoraria> disponibilidadHorarias;

}

