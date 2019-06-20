package co.edu.sena.ghostceet.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(FichaTrimestre.class)
public abstract class FichaTrimestre_ {

	public static volatile SetAttribute<FichaTrimestre, Horario> horarios;
	public static volatile SetAttribute<FichaTrimestre, ResultadosVistos> resultadosVistos;
	public static volatile SingularAttribute<FichaTrimestre, Ficha> ficha;
	public static volatile SingularAttribute<FichaTrimestre, Long> id;

}

