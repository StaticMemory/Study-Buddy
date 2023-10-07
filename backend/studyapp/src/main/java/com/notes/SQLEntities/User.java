package com.notes.SQLEntities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.GenerationType;
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String username;
    private String pathToProfile;
    private String dateCreated;
    public long getId() {
        return id;
    }
    public String getDateCreated() {
        return dateCreated;
    }
    public void setDateCreated(String dateCreated) {
        this.dateCreated = dateCreated;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPathToProfile() {
        return pathToProfile;
    }
    public void setPathToProfile(String pathToProfile) {
        this.pathToProfile = pathToProfile;
    }
    private String email;
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public User(String username, String pathToProfile, String email, String dateCreated) {
        this.dateCreated = dateCreated;
        this.username = username;
        this.pathToProfile = pathToProfile;
        this.email = email;
    }


}
