/* eslint-disable prettier/prettier */
import app_config from "@configs/app_config";
import { db, centralDbBootstrap, dataSourceOptions } from "@configs/database"; 
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const schema = process.env.npm_config_schema ?? (app_config?.default_schema_identifier ?? 'public'); 

const migrateRun = (schema: string | null) => {
    if(!schema) schema = 'public';
    console.log(`Migrating..... Database Schema name: ${schema}`);
    // if(schema == (app_config?.default_schema_identifier ?? 'public')){
        db.initialize().then(() => {
            db.runMigrations().then(() => { console.log('migration completed') }).catch(err => console.error(err));
        }).catch(err => console.error(err));
    // }else{
    //     const tenantDs = new DataSource({
    //         ...dataSourceOptions,
    //         schema,
    //         migrations: [__dirname + "/../database/migrations/*.ts"]
    //     } as PostgresConnectionOptions);
    //     tenantDs.initialize().then(() => {
    //         tenantDs.runMigrations().then(() => { console.log('migration completed') }).catch(err => console.error(err));
    //     }).catch(err => console.error(err));
    // }
}

migrateRun(schema);