import winston from 'winston';

test("Logger Transports File - Transports Level", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [new winston.transports.File({
            level: "error",
            filename: "LogErrorOnly.log"
        })]
    });

    logger.error("Logger Error!");
});