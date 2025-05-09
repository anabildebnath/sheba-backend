import { Test, TestingModule } from '@nestjs/testing';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';

describe('ServicesController', () => {
let controller: ServicesController;
let service: ServicesService;

beforeEach(async () => {
const module: TestingModule = await Test.createTestingModule({
controllers: [ServicesController],
providers: [ServicesService],
}).compile();

controller = module.get<ServicesController>(ServicesController);
service = module.get<ServicesService>(ServicesService);

});

it('should return paginated services', async () => {
jest.spyOn(service, 'findAll').mockResolvedValue({ data: [], total: 0 });
expect(await controller.findAll('1','10')).toEqual({ data: [], total: 0 });
});
});
