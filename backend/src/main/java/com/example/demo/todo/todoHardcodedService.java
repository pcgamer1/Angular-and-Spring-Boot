package com.example.demo.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class todoHardcodedService {

	private static ArrayList<Todo> todos = new ArrayList<Todo>();
	private static int idCounter = 0;

	static {
		todos.add(new Todo(++idCounter, "Sarthak", "Learn to network", new Date(), false));
		todos.add(new Todo(++idCounter, "Sarthak", "Learn to network", new Date(), false));
		todos.add(new Todo(++idCounter, "Sarthak", "Learn to network", new Date(), false));
	}
	
	public List<Todo> findAll() {
		return todos;
	}

	public Todo findById(long id) {
		for (Todo todo : todos) {
			if (todo.getId() == id)
				return todo;
		}
		return null;
	}

	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null)
			return null;
		todos.remove(todo);
		return todo;
	}

}
