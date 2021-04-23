import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {

  return (
    <div className="App">
    <Task
      task={{
        id: '5',
        state: 'TASK_PINNED',
        title: 'Update Task',
        updatedAt: new Date(),
        readonly: false,
      }}
      onPinTask={()=>{console.log('onPinTask is completely work')}}
      onArchiveTask={()=>{console.log('onArchiveTask is completely work')}}
    />
    </div>
  );
}

export default App;
