import winston from 'winston';

test("Logger Transports File", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [new winston.transports.File({
            filename: "transports-file.log"
        })]
    });

    logger.info("Test file logger!");
});