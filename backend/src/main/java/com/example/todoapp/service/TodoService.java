package com.example.todoapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.todoapp.model.Todo;
import com.example.todoapp.repository.TodoRepository;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

//    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo saveTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public Todo getTodoById(Long id) {
        return todoRepository.findById(id).orElse(null);
    }

    public void deleteTodoById(Long id) {
        todoRepository.deleteById(id);
    }
}
