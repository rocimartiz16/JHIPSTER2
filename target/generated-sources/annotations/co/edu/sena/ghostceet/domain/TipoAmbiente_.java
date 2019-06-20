package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(TipoAmbiente.class)
public abstract class TipoAmbiente_ {

	public static volatile SingularAttribute<TipoAmbiente, String> descripcion;
	public static volatile SingularAttribute<TipoAmbiente, String> tipo;
	public static volatile SingularAttribute<TipoAmbiente, Estado> estado;
	public static volatile SetAttribute<TipoAmbiente, Ambiente> ambientes;
	public static volatile SingularAttribute<TipoAmbiente, Long> id;

}

