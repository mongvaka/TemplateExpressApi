import { type } from "os";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CompanyTable } from "./CompanyTable";

@Entity("bank_table")
export class BankTable {
  @PrimaryGeneratedColumn("uuid")
  bank_uuid: string;
  @Column("text")
  bank_code: string;
  @Column("text")
  bank_name: string;
  @Column("text")
  bank_branch: string;
  @Column({
    type: "text",
    nullable: true,
  })
  account_name: string;
  @Column({
    type: "text",
    nullable: true,
  })
  account_number: string;
  @Column({
    type: "uuid",
    nullable: true,
  })
  bank_category_table: string;
  @Column({
    type: "double precision",
    nullable: true,
  })
  financial_amount: number;
  @Column({
    type: "double precision",
    nullable: true,
  })
  balance: number;
  @Column({
    type: "double precision",
    nullable: true,
  })
  spending_limit: number;
  // company_table: CompanyTable;
  // @Column({
  //   type: "uuid",
  //   nullable: true,
  // })

  @ManyToOne((type) => CompanyTable)
  @JoinColumn({ name: "company_uuid" })
  // conpany_table: CompanyTable;
  @Column({
    type: "uuid",
    default: "6401dee8-8c18-4099-b704-4a954f52a66f",
  })
  company_uuid: string;
  @Column("uuid")
  branch_uuid: string;
  @Column("boolean")
  is_active: boolean;
  @Column("text")
  create_by: string;
  @Column("timestamp without time zone")
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
  @Column({
    type: "integer",
    nullable: true,
  })
  bank_category: number;
}
