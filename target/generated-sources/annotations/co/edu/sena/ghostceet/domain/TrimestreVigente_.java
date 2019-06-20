package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import java.time.ZonedDateTime;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(TrimestreVigente.class)
public abstract class TrimestreVigente_ {

	public static volatile SingularAttribute<TrimestreVigente, Integer> trimestreProgramado;
	public static volatile SingularAttribute<TrimestreVigente, Estado> estado;
	public static volatile SingularAttribute<TrimestreVigente, Anio> anio1;
	public static volatile SingularAttribute<TrimestreVigente, ZonedDateTime> fechaInicio;
	public static volatile SetAttribute<TrimestreVigente, VersionHorario> versionHorarios;
	public static volatile SingularAttribute<TrimestreVigente, Long> id;
	public static volatile SingularAttribute<TrimestreVigente, ZonedDateTime> fechaFin;
	public static volatile SingularAttribute<TrimestreVigente, Integer> anio;

}

