package inspiraimageapi.infra.repository;

import inspiraimageapi.domain.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String> {

}
