export class MovieList {
  data = [
    {
      id: 1,
      title: 'The Lord of the Rings - The Fellowship of the Ring',
      year: 2001,
    },
    {
      id: 2,
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
  ];

  getAll = () => {
    return Promise.resolve(this.data);
  };

  add = entity => {
    this.data.push(entity);
    return Promise.resolve();
  };

  remove = id => {
    this.data = this.data.filter(entity => entity.id === id);
    return Promise.resolve();
  };

  update = (id, entity) => {
    this.remove(id);
    this.add(entity);
    return Promise.resolve();
  };

  get = id => {
    return Promise.resolve(this.data.find(entity => entity.id === id));
  };
}
