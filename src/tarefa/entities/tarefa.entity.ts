import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tarefa {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    id_atividade: number

    @Column({ nullable: false, default: 1 })
    id_status: number

    @Column()
    nome: string

    @Column({ nullable: true })
    descricao: string

    @Column({ nullable: true })
    prazo: Date

    @Column({ nullable: true })
    concluido_em: Date

    @Column({ nullable: true })
    cancelado_em: Date

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
