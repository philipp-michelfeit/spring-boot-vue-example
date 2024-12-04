import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/todos";

class TodoService {
    getAllTodos() {
        return axios.get(API_BASE_URL);
    }

    getTodoById(todoId) {
        return axios.get(`${API_BASE_URL}/${todoId}`);
    }

    createTodo(todo) {
        return axios.post(API_BASE_URL, todo);
    }

    updateTodo(todo) {
        return axios.put(`${API_BASE_URL}/${todo.id}`, todo);
    }

    deleteTodo(todoId) {
        return axios.delete(`${API_BASE_URL}/${todoId}`);
    }
}

export default new TodoService();