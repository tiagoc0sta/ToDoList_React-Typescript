import { TbClipboard, TbClipboardText } from 'react-icons/tb';
import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './tasks.module.css';

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({tasks, onDelete, onComplete }: Props){
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter((task)=> task.isCompleted).length;

  return(
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created Tasks</p>
          <span>{taskQuantity}</span>

          <div>
            <p className={styles.textPurple}>Finished</p>
            <span> {completedTasks} of {taskQuantity}</span>
          </div>
        </div>
      </header>
        <div className={styles.list}>
          {tasks.map((task) =>(
            <Task 
              key={task.id} 
              task={task} 
              onDelete={onDelete}
              onComplete={onComplete}
              />
          ))}

          {tasks.length <= 0 && (
            <section className={styles.empty}>
              <TbClipboardText size={50}/>
              <div>
                <p>You do not have registered tasks yet</p>
                <span>Create tasks and organize yous ToDo List</span>
              </div>
            </section>
          )}  

        </div>

    </section>
  )
}