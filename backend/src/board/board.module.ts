import { forwardRef, Module } from '@nestjs/common';
import { BoardResolver } from './resolvers/board/board.resolver';
import { BoardService } from './services/board/board.service';
import { BoardEntity } from '../entities/board.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnModule } from '../column/column.module';
import { CardModule } from '../card/card.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardEntity]),
    forwardRef(() => ColumnModule),
    forwardRef(() => CardModule),
  ],
  providers: [BoardResolver, BoardService],
})
export class BoardModule {}
