import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './models/category.model';
import { ConfigModule } from '@nestjs/config';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.TYPEORM_DATABASE,
      entities: [Category],
    }),
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
