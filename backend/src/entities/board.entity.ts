import { IsNumber, IsString } from '@nestjs/class-validator';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('board')
export class BoardEntity {
  @IsNumber()
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Field({ nullable: false })
  @Column({ nullable: false })
  name: string;

  @IsString()
  @Field({ nullable: false })
  @Column({ nullable: false })
  scopeId: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  background: string;
}
