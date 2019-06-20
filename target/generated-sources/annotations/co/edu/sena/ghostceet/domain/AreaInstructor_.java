package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(AreaInstructor.class)
public abstract class AreaInstructor_ {

	public static volatile SingularAttribute<AreaInstructor, Area> area;
	public static volatile SingularAttribute<AreaInstructor, Estado> estado;
	public static volatile SingularAttribute<AreaInstructor, Instructor> instructor;
	public static volatile SingularAttribute<AreaInstructor, Long> id;

}

