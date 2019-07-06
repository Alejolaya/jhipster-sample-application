package io.github.jhipster.application.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * A Tags.
 */
@Entity
@Table(name = "tags")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Tags implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "descripcion")
    private String descripcion;

    @ManyToMany(mappedBy = "tags")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<SugerenciaProducto> sugerenciaProductos = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public Tags descripcion(String descripcion) {
        this.descripcion = descripcion;
        return this;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<SugerenciaProducto> getSugerenciaProductos() {
        return sugerenciaProductos;
    }

    public Tags sugerenciaProductos(Set<SugerenciaProducto> sugerenciaProductos) {
        this.sugerenciaProductos = sugerenciaProductos;
        return this;
    }

    public Tags addSugerenciaProducto(SugerenciaProducto sugerenciaProducto) {
        this.sugerenciaProductos.add(sugerenciaProducto);
        sugerenciaProducto.getTags().add(this);
        return this;
    }

    public Tags removeSugerenciaProducto(SugerenciaProducto sugerenciaProducto) {
        this.sugerenciaProductos.remove(sugerenciaProducto);
        sugerenciaProducto.getTags().remove(this);
        return this;
    }

    public void setSugerenciaProductos(Set<SugerenciaProducto> sugerenciaProductos) {
        this.sugerenciaProductos = sugerenciaProductos;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Tags)) {
            return false;
        }
        return id != null && id.equals(((Tags) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Tags{" +
            "id=" + getId() +
            ", descripcion='" + getDescripcion() + "'" +
            "}";
    }
}
