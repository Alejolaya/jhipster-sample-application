package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.NutrientesAdicionales;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the NutrientesAdicionales entity.
 */
@SuppressWarnings("unused")
@Repository
public interface NutrientesAdicionalesRepository extends JpaRepository<NutrientesAdicionales, Long> {

}
