import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { KafkaService } from 'src/kafka/kafka.service';

const topicName = 'public.db.research_topics_graph.AbstractAuthor.v0';
@Injectable()
export class AbstractAuthorService {
  constructor(private readonly kafkaService: KafkaService) {}

  async onModuleInit() {
    await this.kafkaService.consume(topicName);
  }

  @OnEvent(topicName)
  handleKafkaEvent(key, value) {
    console.log({ key });
    console.log({ value });
  }
}
