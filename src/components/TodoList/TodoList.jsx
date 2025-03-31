import { TodoInfo } from '../TodoInfo';

export const TodoList = ({ todos }) =>
  todos.map(todo => (
    <section key={todo.id} className="TodoList">
      <TodoInfo key={todo.id} todo={todo} />
    </section>
  ));
