import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Atividade1683732128052 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'atividade',
                columns: [
                    {
                        name: 'id', 
                        type: 'int', 
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'nome', 
                        type: 'varchar'
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
        await queryRunner.dropTable('atividade')
    }

}
