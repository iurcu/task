package service;

import model.Task;
import repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    public Optional<Task> getById(long id) {
        return taskRepository.findById(id);
    }

    public Task add(Task task) {
        return taskRepository.save(task);
    }

    public boolean update(long id, Task task) {
        Optional<Task> existingTask = taskRepository.findById(id);
        if (existingTask.isPresent()) {
            task.setId(id);
            taskRepository.save(task);
            return true;
        }
        return false;
    }

    public void delete(long id) {
        taskRepository.deleteById(id);
    }
}
