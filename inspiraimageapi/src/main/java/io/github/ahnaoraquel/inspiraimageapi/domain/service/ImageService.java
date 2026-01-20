package io.github.ahnaoraquel.inspiraimageapi.domain.service;

import io.github.ahnaoraquel.inspiraimageapi.domain.entity.Image;

import java.util.Optional;

public interface ImageService {
    Image save(Image image);

    Optional<Image> getById(String id);
}
