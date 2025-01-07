import React, { useState, useEffect } from 'react'; // Импортируем React и хуки useState, useEffect

const CreateTodo = () => {
    // Локальные состояния
    const [todo, setTodo] = useState(''); // Состояние для текста новой задачи
    const [category, setCategory] = useState(''); // Состояние для категории задачи
    const [todos, setTodos] = useState([]); // Состояние для хранения списка задач
    const [filter, setFilter] = useState('all'); // Состояние для текущего фильтра

    // Функция для получения списка задач с сервера
    const fetchTodos = async () => {
        try {
            // Запрашиваем список задач с API
            const response = await fetch("https://67697d4f863eaa5ac0dbd1ce.mockapi.io/ToDo/todos");
            const data = await response.json(); // Преобразуем ответ в JSON
            setTodos(data); // Сохраняем задачи в состояние
        } catch (err) {
            // Обрабатываем ошибки
            alert("An error occurred while fetching todos: " + err.message);
        }
    };

    // Вызываем fetchTodos при первом рендере компонента
    useEffect(() => {
        fetchTodos(); // Загружаем список задач
    }, []); // Пустой массив зависимостей означает, что этот эффект вызовется только один раз

    // Функция для обработки отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        // Проверяем, чтобы поля не были пустыми
        if (!todo.trim() || !category.trim()) {
            return alert("Please fill in all fields."); // Выводим предупреждение
        }

        // Создаём объект новой задачи
        const newTodo = {
            text: todo, // Текст задачи
            category: category, // Категория задачи
            completed: false, // По умолчанию задача не выполнена
        };

        try {
            // Отправляем новую задачу на сервер
            await fetch("https://67697d4f863eaa5ac0dbd1ce.mockapi.io/ToDo/todos", {
                method: "POST", // Метод POST для создания данных
                headers: {
                    "Content-Type": "application/json", // Указываем тип данных
                },
                body: JSON.stringify(newTodo), // Преобразуем задачу в JSON
            });
            setTodo(''); // Сбрасываем поле ввода задачи
            setCategory(''); // Сбрасываем поле ввода категории
            fetchTodos(); // Обновляем список задач
        } catch (err) {
            // Обрабатываем ошибки
            alert("An error occurred: " + err.message); 
        }
    };

    // Фильтруем задачи на основе выбранной категории
    const filteredTodos = filter === 'all' ? todos : todos.filter(todo => todo.category === filter);

    // Получаем список уникальных категорий задач
    const categories = ['all', ...new Set(todos.map(todo => todo.category))];

    return (
        <div className="form-container h-[900px]"  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f4f4f9', justifyContent: 'center' }}>
            {/* Форма для добавления новой задачи */}
            <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '2rem' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Create To-Do</h3>

                {/* Поле ввода текста задачи */}
                <label htmlFor="todo" style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>To-Do</label>
                <input
                    type="text"
                    placeholder="Enter your task"
                    id="todo"
                    value={todo} // Привязка состояния todo к полю ввода
                    onChange={(e) => setTodo(e.target.value)} // Обновляем состояние при вводе
                    style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />

                {/* Поле ввода категории задачи */}
                <label htmlFor="category" style={{ display: 'block', marginBottom: '0.5rem', color: '#555' }}>Category</label>
                <input
                    type="text"
                    placeholder="Enter category"
                    id="category"
                    value={category} // Привязка состояния category к полю ввода
                    onChange={(e) => setCategory(e.target.value)} // Обновляем состояние при вводе
                    style={{ width: '100%', padding: '0.75rem', marginBottom: '1.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                />

                {/* Кнопка для отправки формы */}
                <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add To-Do</button>
            </form>

            {/* Фильтр для выбора категории */}
            <div style={{ width: '80%', marginBottom: '1rem' }}>
                <label htmlFor="filter" style={{ marginRight: '0.5rem', color: '#555' }}>Filter by Category:</label>
                <select
                    id="filter"
                    value={filter} // Привязка состояния filter к селектору
                    onChange={(e) => setFilter(e.target.value)} // Обновляем состояние при изменении фильтра
                    style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                    {/* Генерируем опции для всех категорий */}
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* Список задач */}
            <ul style={{ width: '80%', background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                {filteredTodos.map((todoItem) => (
                    <li key={todoItem.id} style={{ marginBottom: '1rem', padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                        {/* Отображаем текст задачи и её категорию */}
                        <strong>{todoItem.text}</strong> <span style={{ color: '#666' }}>({todoItem.category})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CreateTodo;
