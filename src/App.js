import { Provider } from 'react-redux';
import store from './store'
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <h2>Todo list</h2>
          <TodoInput/>
          <Todos/>
      </div>
    </Provider>
  );
}

export default App;
