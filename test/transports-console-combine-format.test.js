import winston from 'winston';

test("Logger Console - Format Combine", () => {
    const logger = winston.createLogger({
        level: "silly",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
        ),
        transports: [new winston.transports.Console()]
    });

    logger.error("Info bang ada error di Database!");
    logger.warn("Ada yang mencoba meng-akses system!");
    logger.info("User ardistory___ berhasil login!");
});