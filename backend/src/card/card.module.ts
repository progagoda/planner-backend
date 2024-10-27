import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardEntity } from '../entities/card.entity';
import { CardService } from './services/card/card.service';
import { CardResolver } from './resolvers/card/card.resolver';
import { ColumnModule } from 'src/column/column.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CardEntity]),
    forwardRef(() => ColumnModule),
  ],
  providers: [CardService, CardResolver],
  exports: [CardService],
})
export class CardModule {}
