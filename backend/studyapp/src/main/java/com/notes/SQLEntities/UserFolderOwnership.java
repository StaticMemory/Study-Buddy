package com.notes.SQLEntities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserFolderOwnership {
    //same thing as file ownership, but folder ownership overrides fileownership (so if a person has read access to a folder, it has read access to all its files)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long folderid;
    public long getUserid() {
        return userid;
    }
    public void setUserid(long userid) {
        this.userid = userid;
    }
    private long userid;
    private int permType;
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getFolderid() {
        return folderid;
    }
    public void setFolderid(long folderid) {
        this.folderid = folderid;
    }
    public int getPermType() {
        return permType;
    }
    public void setPermType(int permType) {
        this.permType = permType;
    }
}
