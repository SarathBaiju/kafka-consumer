import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AbstractAuthorService {
  @OnEvent('public.db.research_topics_graph.AbstractAuthor.v0')
  handleKafkaEvent(key, value) {
    console.log({ key });
    console.log({ value });
  }
}
