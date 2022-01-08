import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/azure-database';
import { Lesson } from './lesson.entity';
import { LessonDto } from './lesson.dto';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson)
    private readonly container,
  ) {}

  async create(lessonDto: LessonDto) {
    this.container.items.create(lessonDto);
  }

  async findOne(id: string): Promise<Lesson> {
    try {
      const querySpec = {
        query: 'SELECT * FROM root r WHERE r.id=@id',
        parameters: [
          {
            name: '@id',
            value: id,
          },
        ],
      };
      const { resources } = await this.container.items.query(querySpec).fetchAll();
      return resources[0];
    } catch (error) {
      // Entity not found
      throw new UnprocessableEntityException(error);
    }
  }

  async delete(id: string) {
    try {
      await this.container.item(id).delete();
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
