import { createLogger, format, transports } from "winston";

const logger = createLogger({
    format:format.combine(
        format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
        format.printf((info)=>`${info.timestamp} ${info.level}:${info.message}`)
    ),
    transports:[
        new transports.File({filename: "logs/error.log", level:"error"}),
        new transports.Console({level:"info"}),
    ],
});


export default logger;