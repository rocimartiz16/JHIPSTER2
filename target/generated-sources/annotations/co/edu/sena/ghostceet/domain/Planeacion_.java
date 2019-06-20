package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Planeacion.class)
public abstract class Planeacion_ {

	public static volatile SingularAttribute<Planeacion, Estado> estado;
	public static volatile SingularAttribute<Planeacion, Long> id;
	public static volatile SingularAttribute<Planeacion, String> nombrePlaneacion;

}

