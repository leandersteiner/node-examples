import { Entity } from '../../infra/db/Entity.js';

export interface Movie extends Entity<number> {
  title: string;
  year: number;
}
