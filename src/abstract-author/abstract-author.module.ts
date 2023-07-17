import { Module } from '@nestjs/common';
import { AbstractAuthorService } from './abstract-author.service';

@Module({
  providers: [AbstractAuthorService]
})
export class AbstractAuthorModule {}
