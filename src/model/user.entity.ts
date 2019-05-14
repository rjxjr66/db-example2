import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Photo } from '.';

@Entity()
export class User {
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
  is: boolean;

  @ManyToMany(type => Photo, photo => photo.users)
  @JoinTable()
  photos: Photo[];
}