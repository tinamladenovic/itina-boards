import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [BoardsModule, PrismaModule], // 👈 tvoji moduli
  controllers: [AppController], // 👈 mora da sadrži AppController
  providers: [AppService], // 👈 mora da sadrži AppService
})
export class AppModule {}
