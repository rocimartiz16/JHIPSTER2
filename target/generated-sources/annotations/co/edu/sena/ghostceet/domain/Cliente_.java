package co.edu.sena.ghostceet.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Cliente.class)
public abstract class Cliente_ {

	public static volatile SingularAttribute<Cliente, String> segundoNombre;
	public static volatile SingularAttribute<Cliente, String> primerNombre;
	public static volatile SingularAttribute<Cliente, String> primerApellido;
	public static volatile SingularAttribute<Cliente, String> segundoApellido;
	public static volatile SingularAttribute<Cliente, Documento> documento;
	public static volatile SingularAttribute<Cliente, Long> id;
	public static volatile SingularAttribute<Cliente, String> numeroDocumento;
	public static volatile SetAttribute<Cliente, Instructor> instructors;

}

