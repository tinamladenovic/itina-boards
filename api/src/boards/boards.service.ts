import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BoardsService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.board.findMany();
  }

  // owner je opcioni, default 'system'
  async create(data: { title: string; owner?: string }) {
    return this.prisma.board.create({
      data: {
        title: data.title,
        owner: data.owner ?? 'system',
      },
    });
  }
}
