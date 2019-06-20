package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(NivelFormacion.class)
public abstract class NivelFormacion_ {

	public static volatile SingularAttribute<NivelFormacion, Estado> estado;
	public static volatile SingularAttribute<NivelFormacion, String> nivelFormacion;
	public static volatile SingularAttribute<NivelFormacion, Long> id;
	public static volatile SetAttribute<NivelFormacion, Programa> programa1S;

}

