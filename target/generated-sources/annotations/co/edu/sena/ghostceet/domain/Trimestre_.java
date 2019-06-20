package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Trimestre.class)
public abstract class Trimestre_ {

	public static volatile SetAttribute<Trimestre, PlaneacionTrimestre> planeacionTrimestre5S;
	public static volatile SingularAttribute<Trimestre, String> nombreTrimestre;
	public static volatile SingularAttribute<Trimestre, Estado> estado;
	public static volatile SingularAttribute<Trimestre, Jornada> jornada;
	public static volatile SingularAttribute<Trimestre, Long> id;

}

