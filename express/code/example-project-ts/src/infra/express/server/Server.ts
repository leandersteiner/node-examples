import express from 'express';
import { AddressInfo } from 'net';
import * as http from 'http';

export class Server {
  private express: express.Application;
  private http: http.Server | undefined;
  private port = process.env.PORT || 8080;

  constructor() {
    this.express = express();
    this.initMiddleware();
  }

  public useRouter = (prefix: string, router: express.Router): Server => {
    this.express.use(prefix, router);
    return this;
  };

  public start = async (): Promise<void> => {
    return new Promise<void>(resolve => {
      this.http = this.express.listen(this.port, () => {
        const { port } = this.http?.address() as AddressInfo;
        console.log(`Application running on PORT ${port}`);
        resolve();
      });
    });
  };

  public stop = async (): Promise<void> => {
    console.log('Stopping http server...');
    this.http?.close();
  };

  private initMiddleware() {
    this.express.use(express.json());
  }
}
