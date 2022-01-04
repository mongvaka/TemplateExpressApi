import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({
    length: 100,
  })
  name: string;
  @Column("text")
  description: string;
  @Column()
  filename: string;
  @Column("double precision")
  views: number;
  @Column()
  isPublished: boolean;
}
