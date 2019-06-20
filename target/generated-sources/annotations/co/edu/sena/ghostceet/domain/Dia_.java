package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Dia.class)
public abstract class Dia_ {

	public static volatile SingularAttribute<Dia, String> nombreDia;
	public static volatile SingularAttribute<Dia, Estado> estado;
	public static volatile SetAttribute<Dia, Horario> horarios;
	public static volatile SingularAttribute<Dia, String> color;
	public static volatile SingularAttribute<Dia, Long> id;

}

