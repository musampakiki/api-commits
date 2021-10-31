import { Controller, Get, Param } from '@nestjs/common';
import { CommitsService } from './commits.service';

@Controller('api/commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  async root() {
    const response = await this.commitsService
      .getAll()
      .then((result) => (result ? { commits: result } : { commits: [] }));

    return response;
  }
  @Get(':sha')
  getOne(@Param('sha') sha: string) {
    return this.commitsService.getById(sha);
  }
}
