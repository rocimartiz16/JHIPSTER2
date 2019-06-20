package co.edu.sena.ghostceet.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(FaseProyecto.class)
public abstract class FaseProyecto_ {

	public static volatile SingularAttribute<FaseProyecto, String> nombreFase;
	public static volatile SetAttribute<FaseProyecto, ActividadProyecto> actividadProyecto7S;
	public static volatile SingularAttribute<FaseProyecto, Proyecto> proyecto;
	public static volatile SingularAttribute<FaseProyecto, Long> id;
	public static volatile SingularAttribute<FaseProyecto, String> estadoFase;

}

