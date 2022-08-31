import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './tasks.module.css';

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
}

export function Tasks({tasks, onDelete }: Props){
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
            <Task key={task.id} task={task} onDelete={onDelete}/>
          ))}
        </div>

    </section>
  )
}