import { InputType, ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, OneToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from './user.entity';
import { v4 as uuidv4 } from 'uuid';

@InputType("VerificationInputType",{ isAbstract: true })
@ObjectType()
@Entity()
export class Verification extends CoreEntity {
  @Column()
  @Field((type) => String)
  code: string;

  @OneToOne((type) => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @BeforeInsert()
  createCode(): void {
    this.code = uuidv4();
  }
}
