import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

test("Logger Transports File", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: new DailyRotateFile({
            filename: "app-%DATE%-file.log",
            zippedArchive: true,
            maxSize: "1mb",
            maxFiles: "30d"
        })
    });

    logger.info("Test file logger!");
});