import winston from 'winston';

const logger = winston.createLogger({
    level: "silly",
    transports: [new winston.transports.File({
        handleExceptions: true,
        filename: "exception-log.json"
    })]
});

hello();