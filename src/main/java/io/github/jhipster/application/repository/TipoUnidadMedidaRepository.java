package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.TipoUnidadMedida;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the TipoUnidadMedida entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TipoUnidadMedidaRepository extends JpaRepository<TipoUnidadMedida, Long> {

}
