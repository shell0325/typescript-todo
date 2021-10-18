import { DeleteResult } from 'typeorm';
import { createTaskRequestDto } from '../dto/create-task.request.dto';
import { TaskResponseDto } from '../dto/task.response.dto';
import { TasksResponseDto } from '../dto/tasks.response.dto';
import { updateTaskRequestDto } from '../dto/update-task.request.dto';

export interface ITaskService {
  createTask(param: createTaskRequestDto): Promise<{}>;
  getTasks(): Promise<{}>;
  findTask(taskId: number): Promise<{}>;
  updateTask(taskId: number, param: updateTaskRequestDto): Promise<{}>;
}
