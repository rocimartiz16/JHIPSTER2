package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Programa.class)
public abstract class Programa_ {

	public static volatile SingularAttribute<Programa, String> codigo;
	public static volatile SingularAttribute<Programa, Estado> estado;
	public static volatile SingularAttribute<Programa, String> sigla;
	public static volatile SetAttribute<Programa, Proyecto> proyecto2S;
	public static volatile SingularAttribute<Programa, NivelFormacion> nivelFormacion;
	public static volatile SingularAttribute<Programa, Long> id;
	public static volatile SingularAttribute<Programa, String> version;
	public static volatile SingularAttribute<Programa, String> nombre;
	public static volatile SetAttribute<Programa, Competencia> competencia3S;
	public static volatile SetAttribute<Programa, Ficha> fichas;

}

