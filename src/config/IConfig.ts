import ISwagger from "./ISwagger";

export default interface IConfig {
    apiPrefix: string;
    mongoUri: string;
    nodeEnv: string
    port: number;
    swagger: ISwagger;
};