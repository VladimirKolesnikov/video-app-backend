import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { DbModule } from './db.module';
import { UsersModule } from './modules/users/users.module';
import { DogsModule } from './modules/dogs/dogs.module';

@Module({
  imports: [DbModule, UsersModule, DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
