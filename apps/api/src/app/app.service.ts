import {foo, FOO} from '@myworkspace/data';
import {publishableLib} from '@myworkspace/publishable-lib';
import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return {
      message: `1 Foo is ${FOO}. foo is ${foo()}. Published lib is ${publishableLib()}. Enviroment variable foo is: ${process.env.FOO}`
    };
  }
}
