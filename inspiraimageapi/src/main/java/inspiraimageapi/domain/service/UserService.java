package inspiraimageapi.domain.service;

import inspiraimageapi.domain.AccessToken;
import inspiraimageapi.domain.entity.User;

public interface UserService {
    User getByEmail(String email);
    User save(User user);
    AccessToken autheticate(String email, String password);
}