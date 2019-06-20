package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Proyecto.class)
public abstract class Proyecto_ {

	public static volatile SetAttribute<Proyecto, FaseProyecto> faseProyecto6S;
	public static volatile SingularAttribute<Proyecto, String> codigo;
	public static volatile SingularAttribute<Proyecto, Estado> estado;
	public static volatile SingularAttribute<Proyecto, String> nombreProyecto;
	public static volatile SingularAttribute<Proyecto, Programa> programa;
	public static volatile SingularAttribute<Proyecto, Long> id;

}

