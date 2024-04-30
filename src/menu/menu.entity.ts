import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    descripion: string

    @Column()
    price: string
}
