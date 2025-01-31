import { IsNumber, IsString } from '@nestjs/class-validator';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('card')
export class CardEntity {
  @IsNumber()
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Field({ nullable: false })
  @Column({ nullable: false })
  name: string;

  @IsString()
  @Field({ nullable: true })
  @Column({ nullable: true })
  columnId: number;

  @IsString()
  @Field({ nullable: false })
  @Column({ nullable: false })
  createdDate: string;

  @IsNumber()
  @Field({ nullable: true })
  @Column({ nullable: true })
  positionIndex: number;

  @IsString()
  @Field({ nullable: true })
  @Column({ nullable: true })
  description: string;
}
