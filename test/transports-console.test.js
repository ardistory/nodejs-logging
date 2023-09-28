import winston from 'winston';

test("Transports Console", () => {

    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console()
        ]
    });

    logger.log({
        level: "info",
        message: "Ini Logger"
    });

});