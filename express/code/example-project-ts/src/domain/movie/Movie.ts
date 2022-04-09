import { Entity } from '../../infra/db/Entity';

export interface Movie extends Entity<number> {
  title: string;
  year: number;
}
