import { ApiProperty } from '@nestjs/swagger';
import { Task } from 'src/database/entities/task.entity';

export class updateTaskRequestDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;
}
