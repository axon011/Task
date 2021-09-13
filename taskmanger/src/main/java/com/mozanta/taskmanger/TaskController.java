
package com.mozanta.taskmanger;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin("http://localhost:3000")
public class TaskController{

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/view")
    public List<Tasks> GetTasks(){
        return  taskRepository.findAll();
    }

    @PostMapping("/save")
    public Tasks postMethodName(@RequestBody Tasks tasks){
        tasks.setStatus("Created");
        return taskRepository.save(tasks);
        
    } 
    
    @PutMapping("/update/{id}") 
	public String update (@PathVariable String id) {
		Optional<Tasks> Task = Optional.of(taskRepository.findById(id).get());

	if(Task.isPresent()){
		Tasks task = Task.get();
		task.setStatus("Completed");
        
		taskRepository.save(task);
		return "Task Updated" ;
	}
	return "No Task presented";
	}
    
    @DeleteMapping("/delete/{id}")
    public String DeleteTask(@PathVariable String id){
    taskRepository.deleteById(id);
    return id;

    }
}
