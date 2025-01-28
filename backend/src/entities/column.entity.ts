import { IsNumber, IsString } from '@nestjs/class-validator';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('column')
export class ColumnEntity {
  @IsNumber()
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Field({ nullable: false })
  @Column({ nullable: false })
  name: string;

  @IsNumber()
  @Field({ nullable: true })
  @Column({ nullable: true })
  positionIndex: number;

  @IsString()
  @Field({ nullable: false })
  @Column({ nullable: true })
  boardId: string;
}
