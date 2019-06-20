package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Modalidad.class)
public abstract class Modalidad_ {

	public static volatile SingularAttribute<Modalidad, Estado> estado;
	public static volatile SetAttribute<Modalidad, Horario> horarios;
	public static volatile SingularAttribute<Modalidad, String> color;
	public static volatile SingularAttribute<Modalidad, Long> id;
	public static volatile SingularAttribute<Modalidad, String> nombre;

}

