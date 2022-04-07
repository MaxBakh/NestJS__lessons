"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeORMConfigProvider = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const database_ormconfig_constant_1 = require("./database-ormconfig.constant");
(0, dotenv_1.config)();
exports.typeORMConfigProvider = typeorm_1.TypeOrmModule.forRootAsync({
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async (configService) => (0, database_ormconfig_constant_1.getOrmConfig)(configService, '127.0.0.1'),
});
//# sourceMappingURL=providers.js.map