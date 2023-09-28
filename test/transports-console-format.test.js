import winston from 'winston';

test("Logger Transports Console - Format", () => {
    const logger = winston.createLogger({
        level: "silly",
        format: winston.format.printf(log => {
            return `${new Date} : ${log.level.toUpperCase()} : ${log.message}`;
        }),
        transports: [new winston.transports.Console()]
    });

    logger.error("Info bang ada error!");
});