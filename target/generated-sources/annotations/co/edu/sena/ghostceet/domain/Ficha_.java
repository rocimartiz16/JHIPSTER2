package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Ficha.class)
public abstract class Ficha_ {

	public static volatile SingularAttribute<Ficha, Estado> estado;
	public static volatile SingularAttribute<Ficha, EstadoFicha> estadoFicha;
	public static volatile SingularAttribute<Ficha, String> numero;
	public static volatile SingularAttribute<Ficha, ZonedDateTime> fechaInicio;
	public static volatile SingularAttribute<Ficha, String> ruta;
	public static volatile SetAttribute<Ficha, FichaTrimestre> fichaTrimestres;
	public static volatile SingularAttribute<Ficha, Programa> programa;
	public static volatile SingularAttribute<Ficha, Long> id;
	public static volatile SingularAttribute<Ficha, ZonedDateTime> fechaFin;

}

