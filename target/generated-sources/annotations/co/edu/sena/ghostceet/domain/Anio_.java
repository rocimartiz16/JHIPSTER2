package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Anio.class)
public abstract class Anio_ {

	public static volatile SingularAttribute<Anio, Integer> numeroAnio;
	public static volatile SingularAttribute<Anio, Estado> estado;
	public static volatile SetAttribute<Anio, TrimestreVigente> trimestreVigentes;
	public static volatile SingularAttribute<Anio, Long> id;
	public static volatile SetAttribute<Anio, VinculacionInstructor> vinculacionInstructors;

}

