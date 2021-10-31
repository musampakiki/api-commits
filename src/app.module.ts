import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsController } from './commits/commits.controller';
import { CommitsService } from './commits/commits.service';
import { CommitsModule } from './commits/commits.module';
import { ListsController } from './lists/lists.controller';
import { ListsModule } from './lists/lists.module';
import { ListsService } from './lists/lists.service';

@Module({
  imports: [CommitsModule, ListsModule],
  // imports: [],
  controllers: [AppController, CommitsController, ListsController],
  providers: [AppService, CommitsService, ListsService],
  // providers: [],
})
export class AppModule {}
