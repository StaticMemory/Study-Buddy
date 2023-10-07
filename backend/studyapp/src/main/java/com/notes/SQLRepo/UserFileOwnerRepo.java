package com.notes.SQLRepo;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.notes.SQLEntities.UserFileOwnership;

public interface UserFileOwnerRepo extends CrudRepository<UserFileOwnership,Long> {
    @Query("SELECT u.fileid FROM UserFileOwneship u WHERE u.userid= ?1")
    ArrayList<Long> getIDsOfAccessibleMedia(Long userID);
}
