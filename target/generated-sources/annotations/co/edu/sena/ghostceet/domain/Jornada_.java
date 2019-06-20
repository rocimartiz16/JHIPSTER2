package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Jornada.class)
public abstract class Jornada_ {

	public static volatile SingularAttribute<Jornada, String> descripcion;
	public static volatile SingularAttribute<Jornada, Estado> estado;
	public static volatile SingularAttribute<Jornada, String> nombreJornada;
	public static volatile SetAttribute<Jornada, Trimestre> trimestre4S;
	public static volatile SingularAttribute<Jornada, Long> id;
	public static volatile SingularAttribute<Jornada, String> siglaJornada;
	public static volatile SingularAttribute<Jornada, String> imagenUrl;

}

