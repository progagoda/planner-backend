import { Module } from '@nestjs/common';
import { BoardResolver } from './resolvers/board/board.resolver';
import { BoardService } from './services/board/board.service';
import { BoardEntity } from '../entities/board.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BoardEntity])],
  providers: [BoardResolver, BoardService],
})
export class BoardsModule {}
