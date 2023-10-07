package com.notes.SQLRepo;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.notes.SQLEntities.UserFolderOwnership;

public interface UserFolderOwnershipRepo extends CrudRepository<UserFolderOwnership,Long> {
    @Query("SELECT f.folderid FROM UserFolderOwnership f WHERE f.userid= ?1")
    ArrayList<Long> getFoldersAccessibleToUsers(Long userid); 
    // Entries will only exist for users with access to the folder, permission checking will be handled by individual files
}
