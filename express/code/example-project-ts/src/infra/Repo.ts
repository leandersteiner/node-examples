interface Repo<T> {
  find(id: number): Promise<T>;
  delete(entity: T): Promise<T>;
  save(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
}