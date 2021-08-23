import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Tree, TreeChildren } from "typeorm"

@Entity()
export class VKGroup {
  @PrimaryColumn()
  groupId: number

  @Column("simple-array")
  contacts: number[]
}

@Entity()
export class LastId {
  @PrimaryColumn()
  id: number

  @Column({ default: 206627163, type: "bigint" })
  groupId: number
}
