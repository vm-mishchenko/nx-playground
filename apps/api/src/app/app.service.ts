import {FOO} from '@myworkspace/data';
import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return {message: `Foo is ${FOO}`};
  }
}
