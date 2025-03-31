import './App.scss';
import todosFromServer from './api/todos.json';
import { TodoList } from './components/TodoList';

export function App() {
  return (
    <div className="App">
      <h1 className="App_title">Static list of todos</h1>
      <TodoList todos={todosFromServer} />
    </div>
  );
}
