package com.notes.SQLRepo;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.notes.SQLEntities.Folder;

public interface FolderRepo extends CrudRepository<Folder,Long> {
    @Query("SELECT Folder f FROM Folder WHERE f.title = ?1")
    Optional<Folder> returnFolderByName(String title);

    @Query("DELETE Folder f FROM Folder WHERE f.title = ?1")
    void deleteFolderByName(String title);

    @Query("SELECT Folder f FROM Folder WHERE f.id IN (?1)")
    ArrayList<Folder> returnFolderByIDList(ArrayList<Long> ids); // call user permission repo and use this as input

}
