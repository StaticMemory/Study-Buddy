package com.notes.SQLRepo;
import org.springframework.data.repository.CrudRepository;
import com.notes.SQLEntities.User;
public interface UserRepo extends CrudRepository<User,Long>{
    
}
