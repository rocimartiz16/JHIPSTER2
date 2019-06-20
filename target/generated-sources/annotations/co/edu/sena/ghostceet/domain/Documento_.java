package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Documento.class)
public abstract class Documento_ {

	public static volatile SingularAttribute<Documento, Estado> estado;
	public static volatile SingularAttribute<Documento, String> sigla;
	public static volatile SingularAttribute<Documento, Long> id;
	public static volatile SetAttribute<Documento, Cliente> clientes;
	public static volatile SingularAttribute<Documento, String> nombre;

}

