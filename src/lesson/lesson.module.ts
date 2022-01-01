import { Module } from '@nestjs/common';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';

@Module({
  imports: [AzureCosmosDbModule.forFeature([{ dto: Lesson }])],
  providers: [LessonService],
  controllers: [LessonController],
})
export class LessonModule {}
