export class ReviewList {
  data = [
    {
      id: 1,
      movieId: 1,
      user: 'John Doe',
      rating: 9,
      title: 'Greate Movie',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    },
    {
      id: 2,
      movieId: 2,
      user: 'John Doe',
      rating: 9,
      title: 'Greate sequel to a great movie',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
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
    return Promise.resolve(this.data.filter(entity => entity.movieId === id));
  };
}
