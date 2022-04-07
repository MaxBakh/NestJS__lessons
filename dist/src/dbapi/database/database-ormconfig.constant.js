"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrmConfig = void 0;
const getOrmConfig = (configService, hostname) => {
    let OrmConfig;
    const settings = {
        type: configService.get('TYPEORM_CONNECTION'),
        host: hostname,
        port: configService.get('TYPEORM_PORT'),
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD'),
        database: configService.get('TYPEORM_DATABASE'),
        entities: [__dirname + '/entities/*.entity{.ts,.js}'],
    };
    if (process.env.NODE_ENV !== 'test') {
        OrmConfig = {
            ...settings,
            migrations: [__dirname + '/../../../migration/*.ts'],
            migrationsDir: configService.get('TYPEORM_MIGRATIONS_DIR'),
            logging: configService.get('TYPEORM_LOGGING') === 'true',
            supportBigNumbers: true,
            bigNumberStrings: false,
            charset: 'utf8mb4',
        };
    }
    else {
        OrmConfig = {
            ...settings,
            synchronize: true,
            dropSchema: true,
        };
    }
    console.log(OrmConfig);
    return OrmConfig;
};
exports.getOrmConfig = getOrmConfig;
//# sourceMappingURL=database-ormconfig.constant.js.map