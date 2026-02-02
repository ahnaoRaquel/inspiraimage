package inspiraimageapi.domain.service;

import inspiraimageapi.domain.AccessToken;
import inspiraimageapi.domain.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User getByEmail(String email);
    User save(User user);
    AccessToken autheticate(String email, String password);
}