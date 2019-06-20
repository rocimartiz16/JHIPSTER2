package co.edu.sena.ghostceet.domain;

import co.edu.sena.ghostceet.domain.enumeration.Estado;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(VersionHorario.class)
public abstract class VersionHorario_ {

	public static volatile SingularAttribute<VersionHorario, Estado> estado;
	public static volatile SetAttribute<VersionHorario, Horario> horarios;
	public static volatile SingularAttribute<VersionHorario, Integer> trimestreVigenteId;
	public static volatile SingularAttribute<VersionHorario, Long> id;
	public static volatile SingularAttribute<VersionHorario, Integer> numeroVersion;
	public static volatile SingularAttribute<VersionHorario, TrimestreVigente> versionTrimestre;

}

