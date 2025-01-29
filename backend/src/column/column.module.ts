import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnEntity } from '../entities/column.entity';
import { ColumnService } from './services/column/column.service';
import { ColumnResolver } from './resolvers/column/column.resolver';
import { CardModule } from '../card/card.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ColumnEntity]),
    forwardRef(() => CardModule),
  ],
  providers: [ColumnService, ColumnResolver],
  exports: [ColumnService],
})
export class ColumnModule {}
