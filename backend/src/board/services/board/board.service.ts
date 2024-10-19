import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardEntity } from '../../../entities/board.entity';
import { CreateBoardInput } from '../../inputs/create-board-input';
import { UpdateBoardInput } from '../../inputs/update-board-input';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardEntity)
    private readonly boardRepository: Repository<BoardEntity>,
  ) {}

  async createBoard(boardInput: CreateBoardInput): Promise<BoardEntity> {
    return await this.boardRepository.save(boardInput);
  }

  async getBoardById(id: number): Promise<BoardEntity> {
    return await this.boardRepository.findOne({ where: { id: id } });
  }

  async getBoardsByScopeId(scopeId: string): Promise<BoardEntity[]> {
    return await this.boardRepository.find({ where: { scopeId: scopeId } });
  }

  async getAllBoards(): Promise<BoardEntity[]> {
    return await this.boardRepository.find();
  }

  async deleteBoard(id: number): Promise<number> {
    await this.boardRepository.delete({ id: id });
    return id;
  }

  async updateBoard(updateBoardInput: UpdateBoardInput): Promise<BoardEntity> {
    await this.boardRepository.update(updateBoardInput.id, {
      ...updateBoardInput,
    });
    return await this.boardRepository.findOne({
      where: { id: updateBoardInput.id },
    });
  }
}
