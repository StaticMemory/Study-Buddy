package com.notes.SQLEntities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.GenerationType;
@Entity
public class UserFileOwnership {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    public long getUserid() {
        return userid;
    }
    public void setUserid(long userid) {
        this.userid = userid;
    }
    private long userid;
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getFileid() {
        return fileid;
    }
    public void setFileid(long fileid) {
        this.fileid = fileid;
    }
    public int getPermType() {
        return permType;
    }
    public void setPermType(int permType) {
        this.permType = permType;
    }
    private long fileid;
    private int permType; // assume no perm if no entry, 1 is read only, 2 read/write, 3 allows for transfer/donation of permissions to other users.
    
}
