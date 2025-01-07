import React, { useState, useEffect } from 'react';

const CreateTodo = () => {
    const [todo, setTodo] = useState('');
    const [category, setCategory] = useState('');
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    // Получение списка задач
    const fetchTodos = async () => {
        try {
            const response = await fetch("https://67697d4f863eaa5ac0dbd1ce.mockapi.io/ToDo/todos");
            const data = await response.json();
            setTodos(data);
        } catch (err) {
            alert("An error occurred while fetching todos: " + err.message);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!todo.trim() || !category.trim()) {
            return alert("Please fill in all fields.");
        }

        const newTodo = {
            text: todo,
            category: category,
            completed: false,
        };

        try {
            await fetch("https://67697d4f863eaa5ac0dbd1ce.mockapi.io/ToDo/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTodo),
            });
            setTodo('');
            setCategory('');
            fetchTodos(); // Обновляем список после добавления
        } catch (err) {
            alert("An error occurred: " + err.message); 
        }
    };

    const filteredTodos = filter === 'all' ? todos : todos.filter(todo => todo.category === filter);

    const categories = ['all', ...new Set(todos.map(todo => todo.category))];

    return (
        <div className="form-container h-[900px]"  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f4f4f9', justifyContent: 'center' }}>
            <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '2rem' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Create To-Do</h3>

                <label htmlFor="todo" style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>To-Do</label>
                <input
                    type="text"
                    placeholder="Enter your task"
                    id="todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />

                <label htmlFor="category" style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>Category</label>
                <input
                    type="text"
                    placeholder="Enter category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem', marginBottom: '1.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />

                <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add To-Do</button>
            </form>

            <div style={{ width: '80%', marginBottom: '1rem' }}>
                <label htmlFor="filter" style={{ marginRight: '0.5rem', color: '#555' }}>Filter by Category:</label>
                <select
                    id="filter"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <ul style={{ width: '80%', background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                {filteredTodos.map((todoItem) => (
                    <li key={todoItem.id} style={{ marginBottom: '1rem', padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                        <strong>{todoItem.text}</strong> <span style={{ color: '#666' }}>({todoItem.category})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CreateTodo;
