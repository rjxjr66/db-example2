import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column('boolean')
  field: boolean;

  @Column()
  filename: string;

  @Column('int')
  views: number;

  @Column()
  isPublished: boolean;

  @ManyToMany(type => User, user => user.photos)
  users: User[];
}