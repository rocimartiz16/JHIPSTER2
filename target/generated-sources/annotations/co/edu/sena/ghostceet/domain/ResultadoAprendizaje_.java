package co.edu.sena.ghostceet.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(ResultadoAprendizaje.class)
public abstract class ResultadoAprendizaje_ {

	public static volatile SingularAttribute<ResultadoAprendizaje, String> descripcion;
	public static volatile SingularAttribute<ResultadoAprendizaje, String> codigo;
	public static volatile SetAttribute<ResultadoAprendizaje, ResultadosVistos> resultadosVistos;
	public static volatile SingularAttribute<ResultadoAprendizaje, Long> id;
	public static volatile SetAttribute<ResultadoAprendizaje, LimitacionAmbiente> limitacionAmbientes;

}

