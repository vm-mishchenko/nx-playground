import { Test } from "@nestjs/testing";

import { AppService } from "./app.service";

describe("AppService", () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService]
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe("getData", () => {
    it('should return "Welcome to api!"', () => {
      expect(service.getData()).toEqual({
        message: "1 Foo is 42. foo is publishable-lib. Published lib is publishable-lib. Enviroment variable foo is: undefined"
      });
    });
  });
});
