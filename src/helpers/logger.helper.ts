import { format, transports, createLogger } from 'winston';
import 'winston-daily-rotate-file';

const { combine, splat, timestamp, printf, json, simple } = format;

const combinedTransport = new transports.DailyRotateFile({
  filename: `${__dirname}/../../loggers/application-%DATE%`,
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',
  extension: '.log',
});

const instance = createLogger({
  level: 'silly',
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss.SSS',
    }),
    json(),
    splat(),
    simple(),
    printf(
      ({
        correlationId = '1aa111a1-11aa-11a1-aa11-1111111111aa',
        level,
        message,
        label = 'AppLog',
        // eslint-disable-next-line no-shadow
        timestamp,
      }) => `${timestamp}|${level}|winstonApi.${label}|0|${correlationId}|${message}`,
    ),
  ),
  defaultMeta: { service: 'winston-logs' },
  transports: [combinedTransport],
});

export default instance;
