package com.notes.api;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.notes.SQLEntities.Folder;
import com.notes.SQLEntities.Note;
import com.notes.SQLEntities.User;
import com.notes.SQLRepo.UserRepo;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@RestController
@EnableAutoConfiguration
public class APIHead {
    @Autowired
    private UserRepo usrRepo;
    @RequestMapping(value= "/Default")
    public String test(){
        return "hiii";
    }
    @RequestMapping(value = "/storeNotes")
    public void insertNote(@RequestHeader("name") String name, @RequestHeader("userid") String userid, @RequestHeader("folderid") String folderid, @RequestBody String data){
        
        if(folderid==""){

        }

    }
    @RequestMapping(value = "/insertUser")
    public void addUser(@RequestHeader("username") String username, @RequestHeader("email") String email, @RequestHeader("pathtopfp") String profilePicture, @RequestHeader("date") String date){
        User usr = new User(username, profilePicture, email, date);
        usrRepo.save(usr);
    }
    
    @RequestMapping(value ="/retrieveNotes")
    public ArrayList<Note> getNotes(){
        return null;
    }
    @RequestMapping(value = "/returnFolderFiles")
    public ArrayList<Folder> getFoldersBelongingToUser(){
        return null;
    }
    @RequestMapping(value = "/deleteFolder")
    public void deleteFolder(){

    }
    @RequestMapping(value="returnUniqueFolders")
    public ArrayList<Folder> returnUniqueFolders(){
        return null;
    }
    @RequestMapping(value="/addEmptyFolder")
    public void addFolder(){
        
    }
}
