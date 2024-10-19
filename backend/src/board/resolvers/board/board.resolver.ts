import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from '../../services/board/board.service';
import { BoardEntity } from '../../../entities/board.entity';
import { CreateBoardInput } from '../../inputs/create-board-input';
import { UpdateBoardInput } from '../../inputs/update-board-input';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation(() => BoardEntity)
  async createBoard(
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
  ): Promise<BoardEntity> {
    return await this.boardService.createBoard(createBoardInput);
  }
  @Mutation(() => BoardEntity)
  async updateBoard(
    @Args('updateBoardInput') updateBoardInput: UpdateBoardInput,
  ): Promise<BoardEntity> {
    return await this.boardService.updateBoard(updateBoardInput);
  }

  @Mutation(() => Number)
  async deleteBoard(@Args('id') id: number): Promise<number> {
    return await this.boardService.deleteBoard(id);
  }

  @Query(() => BoardEntity)
  async getBoardById(@Args('id') id: number): Promise<BoardEntity> {
    return await this.boardService.getBoardById(id);
  }
  @Query(() => [BoardEntity])
  async getAllBoards(): Promise<BoardEntity[]> {
    return await this.boardService.getAllBoards();
  }
  @Query(() => [BoardEntity])
  async getBoardByScopeId(
    @Args('scopeId') scopeId: string,
  ): Promise<BoardEntity[]> {
    return await this.boardService.getBoardsByScopeId(scopeId);
  }
}
