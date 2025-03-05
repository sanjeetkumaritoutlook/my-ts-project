import * as winston from "winston";
import * as DailyRotateFile from "winston-daily-rotate-file";

// Custom log filter (logs only "error" and "warn")
const logFilter = winston.format((info, opts) => {
  return info.level === "error" || info.level === "warn" ? info : false;
});

// Define transports
const consoleTransport = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
});

const fileTransport = new DailyRotateFile({
  filename: "logs/app-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  maxSize: "10m", // Max file size before rotation (10MB)
  maxFiles: "14d", // Keep logs for 14 days
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    consoleTransport,
    fileTransport,
    new winston.transports.File({
      filename: "logs/errors.log",
      level: "error",
      format: winston.format.combine(logFilter(), winston.format.json()),
    }),
  ],
});

export default logger;
