package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Area.class)
public abstract class Area_ {

	public static volatile SingularAttribute<Area, String> nombreArea;
	public static volatile SingularAttribute<Area, Estado> estado;
	public static volatile SetAttribute<Area, AreaInstructor> areaInstructors;
	public static volatile SingularAttribute<Area, Long> id;
	public static volatile SingularAttribute<Area, String> urlLogo;

}

