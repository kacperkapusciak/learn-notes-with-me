import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonDto } from './lesson.dto';

import { AVAILABLE_NOTES, POINTS_PER_NOTE } from './lesson.consts';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post()
  create(@Body() lessonDto: LessonDto) {
    this.lessonService.create(lessonDto);
  }

  @Post('start/:numberOfNotes?')
  start(@Param('numberOfNotes') numberOfNotes = 5) {
    const availableNotesCopy = [...AVAILABLE_NOTES];

    const shuffled = availableNotesCopy.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numberOfNotes);

    const lesson = new LessonDto();
    lesson.notes = selected;
    lesson.pointsPerNote = POINTS_PER_NOTE;

    this.create(lesson);

    return lesson;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.lessonService.delete(id);
  }
}
