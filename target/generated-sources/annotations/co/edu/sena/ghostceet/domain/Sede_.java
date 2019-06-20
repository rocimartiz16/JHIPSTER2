package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Sede.class)
public abstract class Sede_ {

	public static volatile SingularAttribute<Sede, String> nombreSede;
	public static volatile SingularAttribute<Sede, Estado> estado;
	public static volatile SetAttribute<Sede, Ambiente> ambientes;
	public static volatile SingularAttribute<Sede, String> direccion;
	public static volatile SingularAttribute<Sede, Long> id;

}

