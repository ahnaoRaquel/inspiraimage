package io.github.ahnaoraquel.inspiraimageapi.application.images;

import io.github.ahnaoraquel.inspiraimageapi.domain.entity.Image;
import io.github.ahnaoraquel.inspiraimageapi.domain.service.ImageService;
import io.github.ahnaoraquel.inspiraimageapi.infra.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepository;

    @Override
    @Transactional
    public Image save(Image image) {
        return imageRepository.save(image);
    }
}
