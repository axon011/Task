package com.mozanta.taskmanger;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Tasks,String>
{

}

