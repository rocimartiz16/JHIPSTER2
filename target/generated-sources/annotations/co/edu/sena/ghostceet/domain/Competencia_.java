package co.edu.sena.ghostceet.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Competencia.class)
public abstract class Competencia_ {

	public static volatile SingularAttribute<Competencia, String> descripcion;
	public static volatile SingularAttribute<Competencia, String> codigo;
	public static volatile SingularAttribute<Competencia, Programa> programa;
	public static volatile SingularAttribute<Competencia, Long> id;

}

