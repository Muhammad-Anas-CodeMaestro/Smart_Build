import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SellersModule } from './sellers/sellers.module';

@Module({
  imports: [AuthModule, SellersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
