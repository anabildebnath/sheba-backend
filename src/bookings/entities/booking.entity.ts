import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Service } from '../services/entities/service.entity';

@Entity()
export class Booking {
@PrimaryGeneratedColumn('uuid') id: string;
@Column() customerName: string;
@Column() customerPhone: string;
@Column({ type: 'timestamp', nullable: true }) scheduleAt?: Date;
@Column({ default: 'pending' }) status: string;
@ManyToOne(() => Service)
@JoinColumn({ name: 'serviceId' })
service: Service;
@Column() serviceId: number;
@CreateDateColumn() createdAt: Date;
}
