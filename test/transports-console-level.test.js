import winston from 'winston';

test("Logger console level", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console()
        ]
    });

    logger.error("Hello error");
    logger.warn("Hello warn");
    logger.info("Hello info");
    logger.http("Hello http");
    logger.verbose("Hello verbose");
    logger.debug("Hello debug");
    logger.silly("Hello silly");
});