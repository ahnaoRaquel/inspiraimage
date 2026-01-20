package io.github.ahnaoraquel.inspiraimageapi.application.images;

import io.github.ahnaoraquel.inspiraimageapi.domain.entity.Image;
import io.github.ahnaoraquel.inspiraimageapi.domain.enums.ImageExtension;
import io.github.ahnaoraquel.inspiraimageapi.domain.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/v1/images")
@Slf4j
@RequiredArgsConstructor
public class ImagesController {

    private final ImageService imageService;
    private final ImageMapper imageMapper;

    @PostMapping
    public ResponseEntity save(
            @RequestParam("file") MultipartFile file,
            @RequestParam("name") String name,
            @RequestParam("tags") List<String> tags
    ) throws IOException {

        Image image = imageMapper.mapToImage(file, name, tags);
        Image savedImage = imageService.save(image);

        URI imageUri = buildImageUri(savedImage);

        return ResponseEntity.created(imageUri).build();
    }

    private URI buildImageUri(Image imageId) {
        String imagePath = "/" + imageId.getId();
        return ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path(imagePath)
                .build()
                .toUri();
    }

}
