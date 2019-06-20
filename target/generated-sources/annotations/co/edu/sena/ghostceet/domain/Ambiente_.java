package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Ambiente.class)
public abstract class Ambiente_ {

	public static volatile SingularAttribute<Ambiente, String> descripcion;
	public static volatile SingularAttribute<Ambiente, Estado> estado;
	public static volatile SetAttribute<Ambiente, Horario> horarios;
	public static volatile SingularAttribute<Ambiente, Sede> sede;
	public static volatile SingularAttribute<Ambiente, String> limitacion;
	public static volatile SingularAttribute<Ambiente, Long> id;
	public static volatile SingularAttribute<Ambiente, String> numeroAmbiente;
	public static volatile SetAttribute<Ambiente, LimitacionAmbiente> limitacionAmbientes;
	public static volatile SingularAttribute<Ambiente, TipoAmbiente> tipoAmbiente;

}

