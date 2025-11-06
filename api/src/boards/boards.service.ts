import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BoardsService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.board.findMany();
  }

  // owner je opcioni, default 'system'
  async create(data: { title: string; ownerId?: string }) {
    // ← dodaj upitnik
    return this.prisma.board.create({
      data: {
        title: data.title,
        ownerId: data.ownerId ?? 'system', // ako nije prosleđen, koristi "system"
      },
    });
  }

  async getById(id: string) {
    const board = await this.prisma.board.findUnique({
      where: { id },
    });

    if (!board) {
      throw new Error(`Board with ID ${id} not found`);
    }

    return board;
  }
}
