import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { DbModule } from './db.module';

@Module({
  imports: [DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
