import { Injectable, NotFoundException } from '@nestjs/common';
import { DeletedResult } from 'src/common/types/response';
import { Task } from 'src/database/entities/task.entity';
import { TaskRepository } from 'src/ripositories/task.repository';
import { DeleteResult } from 'typeorm';
import { createTaskRequestDto } from './dto/create-task.request.dto';
import { TaskResponseDto } from './dto/task.response.dto';
import { TasksResponseDto } from './dto/tasks.response.dto';
import { updateTaskRequestDto } from './dto/update-task.request.dto';
import { ITaskService } from './interface/question.service.interface';

@Injectable()
export class TaskService implements ITaskService {
  constructor(private readonly _taskRepository: TaskRepository) {}

  //task作成処理
  async createTask(param: createTaskRequestDto): Promise<TaskResponseDto> {
    const newTask = this._taskRepository.create(param);
    if (!newTask) throw new NotFoundException();
    const task = await this._taskRepository.save(newTask);
    return { task };
  }

  //task全件取得処理
  async getTasks(): Promise<TasksResponseDto> {
    const tasks = await this._taskRepository.find();
    if (!tasks) throw new NotFoundException();
    return { tasks };
  }

  //task1件取得処理
  async findTask(taskId: number): Promise<TaskResponseDto> {
    const task = await this._taskRepository.findOne(taskId);
    if (!task) throw new NotFoundException();
    return { task };
  }

  //task更新処理
  async updateTask(
    taskId: number,
    param: updateTaskRequestDto,
  ): Promise<updateTaskRequestDto> {
    const origin = await this._taskRepository.findOne(taskId);
    if (!origin) throw new NotFoundException();
    const task = await this._taskRepository.save({ ...origin, ...param });
    return { task };
  }

  //特定のtaskの削除
  async deleteTask(taskId: number): Promise<DeleteResult> {
    const result = await this._taskRepository.delete(taskId);
    if (result.affected === 0) throw new NotFoundException();
    return result;
  }
}
