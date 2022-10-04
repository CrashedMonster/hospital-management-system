import { ConfigModule } from '@nestjs/config';

const envConfiguration = () => ({
  app_port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    name: process.env.POSTGRES_DB,
  },
});

const ConfigurationModule = ConfigModule.forRoot({
  isGlobal: true,
  load: [envConfiguration],
});

export { envConfiguration, ConfigurationModule };
