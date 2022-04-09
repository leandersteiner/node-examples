export interface Repository<T> {
  findById(id: number): Promise<T>;
  delete(entity: T): Promise<T>;
  add(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  list(): Promise<T[]>;
}
