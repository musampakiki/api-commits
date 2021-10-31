import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class ListsService {
  private lists: AxiosInstance;

  constructor() {
    this.lists = axios.create({
      baseURL: 'https://api.github.com/repos/nodejs/node/commits',
    });
  }

  async getAll() {
    const response = await this.lists.get(
      'https://api.github.com/repos/nodejs/node/commits?per_page=25',
    );
    return response.data;
  }
}
