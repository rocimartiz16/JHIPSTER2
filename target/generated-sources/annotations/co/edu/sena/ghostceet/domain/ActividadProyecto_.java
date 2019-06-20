package co.edu.sena.ghostceet.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ActividadProyecto.class)
public abstract class ActividadProyecto_ {

	public static volatile SingularAttribute<ActividadProyecto, String> nombreActividad;
	public static volatile SetAttribute<ActividadProyecto, PlaneacionActividad> planeacionActividads;
	public static volatile SingularAttribute<ActividadProyecto, FaseProyecto> faseProyecto;
	public static volatile SingularAttribute<ActividadProyecto, Integer> numeroActividad;
	public static volatile SingularAttribute<ActividadProyecto, Long> id;

}

