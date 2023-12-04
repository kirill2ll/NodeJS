import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { ProductController } from './product.controller';

@Module({
  controllers: [AuthController, ProductController],
})
export class ProductModule {}
