import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnEntity } from '../entities/column.entity';
import { ColumnService } from './services/column/column.service';
import { ColumnResolver } from './resolvers/column/column.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ColumnEntity])],
  providers: [ColumnService, ColumnResolver],
  exports: [ColumnService],
})
export class ColumnModule {}
