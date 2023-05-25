import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class Tarefa1684121324186 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tarefa',
                columns:[
                    {
                        name: 'id', 
                        type: 'int', 
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'id_atividade', 
                        type: 'int', 
                    },
                    {
                        name: 'id_status', 
                        type: 'int', 
                    },
                    {
                        name: 'nome',
                        type: 'varchar'
                    },
                    {
                        name: 'descricao',
                        type: 'varchar'
                    },
                    {
                        name: 'prazo',
                        type: 'date',
                    },
                    {
                        name: 'concluido_em',
                        type: 'date',
                    },
                    {
                        name: 'cancelado_em',
                        type: 'date',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tarefa')
    }

}
