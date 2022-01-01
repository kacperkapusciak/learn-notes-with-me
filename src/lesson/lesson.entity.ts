import { CosmosDateTime } from '@nestjs/azure-database';

export class Lesson {
  id?: string;
  notes: string[];
  pointsPerNote: number;
  @CosmosDateTime() createdAt: Date;
}
