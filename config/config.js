const config = require('./index');

module.exports = {
        "development": {
          "username": config.DB_USERNAME,
          "password": config.DB_PASSWORD,
          "database": config.DB_DATABASE,
          "host": config.DB_HOST,
          "dialect": config.DB_DIARECT,
          "port": config.DB_PORT,	 
        },
        "test": {
            "username": config.DB_USERNAME_TEST,
            "password": config.DB_PASSWORD_TEST,
            "database": config.DB_DATABASE_TEST,
            "host": config.DB_HOST_TEST,
            "dialect": config.DB_DIARECT_TEST,
            "port": config.DB_PORT_TEST,
        },
        "production": {
          "username": config.DB_USERNAME_PRODUCTION,
          "password": config.DB_PASSWORD_PRODUCTION,
          "database": config.DB_DATABASE_PRODUCTION,
          "host": config.DB_HOST_PRODUCTION,
          "dialect": config.DB_DIARECT_PRODUCTION,
          "port": config.DB_PORT_PRODUCTION,
      }
}
