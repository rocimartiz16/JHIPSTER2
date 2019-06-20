package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Vinculacion.class)
public abstract class Vinculacion_ {

	public static volatile SingularAttribute<Vinculacion, Integer> horas;
	public static volatile SingularAttribute<Vinculacion, Estado> estado;
	public static volatile SingularAttribute<Vinculacion, String> tipoVinculacion;
	public static volatile SingularAttribute<Vinculacion, Long> id;
	public static volatile SetAttribute<Vinculacion, VinculacionInstructor> vinculacionInstructors;

}

