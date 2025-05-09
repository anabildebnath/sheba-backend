import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Service {
@PrimaryGeneratedColumn() id: number;
@Column() name: string;
@Column() category: string;
@Column('decimal') price: number;
@Column({ nullable: true }) description: string;
}
