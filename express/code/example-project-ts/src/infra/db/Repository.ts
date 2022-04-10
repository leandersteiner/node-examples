export interface Repository<T> {
  findById(id: number): Promise<T | null>;
  delete(entity: T): Promise<T>;
  add(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  list(): Promise<T[]>;
}
