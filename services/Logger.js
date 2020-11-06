const winston = require( "winston" );

const logger = winston.createLogger( {
  level: "info",
  format: winston.format.json(),
  defaultMeta: {
    service: "smoke-signal-service",
    time: new Date().toISOString()
  },
  transports: [
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    new winston.transports.File( { filename: "error.log", level: "error" } ),
    new winston.transports.File( { filename: "combined.log" } ),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
      )
    })
  ]
} );

module.exports = logger;
