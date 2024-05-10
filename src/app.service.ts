import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Inject, Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService) {}
  getHello(isError: string): string {
    if (isError) {
      this.logger.error({
        label: 'MainResponse',
        correlationId: 'uuid-v4()',
        message: `the value of error is${isError}`,
        // message: `data = {method: ${req.method.toUpperCase()}, url: ${
        //   res.locals.currentRequestURL
        // }, status: ${statusCode}, responseBody: ${customStringify(errorResponse)}}`,
      });
    } else {
      this.logger.log({
        label: 'SomeResponse',
        correlationId: 'uuid-v4()',
        // message: `data = {method: ${req.method.toUpperCase()}, url: ${
        //   res.locals.currentRequestURL
        // }, requestBody: ${customStringify(requestBody)}}`,
        message: `{'data': 'the data string is now fixed and some randowm text being logged.'}`,
      });
    }
    return 'Hello World!';
  }
}
