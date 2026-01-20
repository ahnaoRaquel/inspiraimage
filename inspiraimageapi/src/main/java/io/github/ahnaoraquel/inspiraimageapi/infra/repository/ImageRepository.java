package io.github.ahnaoraquel.inspiraimageapi.infra.repository;

import io.github.ahnaoraquel.inspiraimageapi.domain.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String> {

}
