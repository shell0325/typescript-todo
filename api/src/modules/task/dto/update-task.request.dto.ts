import { ApiProperty } from '@nestjs/swagger';
export class updateTaskRequestDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;
}
