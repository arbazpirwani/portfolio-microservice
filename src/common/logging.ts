import * as winston from "winston";

/**
 * Winston Logger Module
 * Configure with the Provided Options
 * As the needs
 */
const logger = winston.createLogger({});
logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

export default logger;