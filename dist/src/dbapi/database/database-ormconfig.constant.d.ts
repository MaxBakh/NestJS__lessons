import { ConfigService } from '@nestjs/config';
export declare const getOrmConfig: (configService: ConfigService, hostname: string) => {
    migrations: string[];
    migrationsDir: string | undefined;
    logging: boolean;
    supportBigNumbers: boolean;
    bigNumberStrings: boolean;
    charset: string;
    type: string | undefined;
    host: string;
    port: string | undefined;
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    entities: string[];
} | {
    synchronize: boolean;
    dropSchema: boolean;
    type: string | undefined;
    host: string;
    port: string | undefined;
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    entities: string[];
};
