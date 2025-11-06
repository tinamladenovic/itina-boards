import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  async getAll() {
    return this.boardsService.getAll();
  }

  @Post()
  async create(@Body() body: { title: string }) {
    return this.boardsService.create(body); // owner će biti 'system'
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.boardsService.getById(id);
  }
}
