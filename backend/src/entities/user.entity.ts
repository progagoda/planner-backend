import { IsEmail, IsNumber, IsString } from '@nestjs/class-validator';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('users')
export class UserEntity {
  @IsNumber()
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @IsEmail()
  @Field()
  @Column()
  email: string;
}
