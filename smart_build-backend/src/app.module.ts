import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SellersModule } from './sellers/sellers.module';

@Module({
  imports: [AuthModule, SellersModule],
})
export class AppModule { }