import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("company_table")
export class CompanyTable {
  @OneToMany((type) => CompanyTable, (company) => company.company_uuid)
  @PrimaryGeneratedColumn("uuid")
  company_uuid: string;
  @Column({
    type: "text",
    nullable: true,
  })
  company_id: string;
  @Column({
    type: "text",
    nullable: true,
  })
  company_name: string;
  @Column({
    type: "uuid",
    nullable: true,
  })
  default_branch_uuid: string;

  is_active: boolean;
  @Column({
    type: "text",
    nullable: true,
  })
  create_by: string;
  @Column({
    type: "timestamp without time zone",
    nullable: true,
  })
  create_date: string;
  @Column({
    type: "text",
    nullable: true,
  })
  update_by: string;
  @Column({
    type: "timestamp without time zone",
    nullable: true,
  })
  update_date: string;
  @Column({
    type: "uuid",
    nullable: true,
  })
  ref_uuid: string;
  @Column({
    type: "integer",
    nullable: true,
  })
  ref_type: number;
}
