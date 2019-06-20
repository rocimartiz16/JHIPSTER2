package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(EstadoFicha.class)
public abstract class EstadoFicha_ {

	public static volatile SingularAttribute<EstadoFicha, Estado> estado;
	public static volatile SingularAttribute<EstadoFicha, String> nombreEstado;
	public static volatile SingularAttribute<EstadoFicha, Long> id;
	public static volatile SetAttribute<EstadoFicha, Ficha> fichas;

}

