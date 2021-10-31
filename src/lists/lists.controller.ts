import { Controller, Get, Render, Param } from '@nestjs/common';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Get()
  @Render('lists/index')
  async root() {
    const response = await this.listsService
      .getAll()
      .then((result) => (result ? { lists: result } : { lists: [] }));

    return response;
  }
}
//   async findOne(@Param('slug') slug): Promise<ListsService> {
//     return await this.listsService.findOne({slug});
//   }
// }
