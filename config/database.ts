export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'patient-morning-585796.cloud.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'main'),
      user: env('DATABASE_USERNAME', 'duypham9895'),
      password: env('DATABASE_PASSWORD', 'oKpt2u1DgiTW'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
