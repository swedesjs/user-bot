import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Tree, TreeChildren } from "typeorm"

@Entity()
// export class Contact {
//   @PrimaryColumn()
//   id: number

//   @ManyToMany(() => Items, items => items.contacts)
//   items: Items[]

//   @Column("bigint")
//   userId: number
// }

// @Entity()
// export class Items {
//   @PrimaryColumn()
//   id: number

//   @ManyToMany(() => VKGroup, groups => groups.items)
//   groups: VKGroup[]

//   @ManyToMany(() => Contact, contact => contact.items)
//   contacts: Contact[]
// }

// @Entity()
// export class VKGroup {
//   @PrimaryColumn()
//   id: number

//   @ManyToMany(() => Items, items => items.groups)
//   items: Items[]
// }
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
