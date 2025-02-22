/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createApiKeysTable1678276789877 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'catagories',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'subcatagory',
                    type: 'varchar',
                    isNullable: true,
                },
                
            ],
        }));
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('catagories');
    }

}