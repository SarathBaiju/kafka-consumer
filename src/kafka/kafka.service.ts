import { SchemaRegistry } from '@kafkajs/confluent-schema-registry';
import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaService {
  async onModuleInit() {
    const kafka = new Kafka({
      brokers: ['localhost:9092'],
      clientId: 'my-app',
    });

    const schemaRegistry = new SchemaRegistry({
      host: 'http://localhost:8081',
    });

    const consumer = kafka.consumer({ groupId: 'my-app-consumer1' });

    await consumer.connect();
    await consumer.subscribe({
      topic: 'public.db.research_topics_graph.AbstractAuthor.v0',
      fromBeginning: true,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const key = await schemaRegistry.decode(message.key);
        const value = await schemaRegistry.decode(message.value);
        console.log({ key });
        console.log({ value });
      },
    });
  }
}