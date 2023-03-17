import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'categories',
})
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  uuid!: string;

  @Column()
  description!: string;

  @Column({ nullable: true })
  image?: string;
}
