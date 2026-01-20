package inspiraimageapi.infra.repository;

import inspiraimageapi.domain.entity.Image;
import inspiraimageapi.domain.enums.ImageExtension;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import java.util.List;

import static inspiraimageapi.infra.repository.specs.GenericSpecs.*;
import static inspiraimageapi.infra.repository.specs.ImageSpecs.*;
import static org.springframework.data.jpa.domain.Specification.*;

public interface ImageRepository extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image> {

    default List<Image> findByExtensionAndNameOrTagsLike(ImageExtension extension, String query){

        Specification<Image> specification = where(conjunction());

        if (extension != null) {
           specification = specification.and(extensionEquals(extension));
        }

        if (StringUtils.hasText(query)) {
            specification = specification.and(anyOf(nameLike(query), tagsLike(query)));
        }

        return findAll(specification);
    }

}
