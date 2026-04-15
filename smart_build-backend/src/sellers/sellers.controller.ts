import { Controller, Post, Body } from '@nestjs/common';
import { SellersService } from './sellers.service';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Post('register')
  async register(
    @Body('store_name') store_name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.sellersService.register(store_name, email, password);
  }
}