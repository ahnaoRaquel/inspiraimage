package inspiraimageapi.domain.service;

import inspiraimageapi.domain.entity.Image;

import java.util.Optional;

public interface ImageService {
    Image save(Image image);

    Optional<Image> getById(String id);
}
