const data = [
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

export const list = (req, res) => {
  res.json(data);
};

export const create = (req, res) => {
  const entity = req.body;
  data.push(entity);
  res.json(entity);
};

export const read = (req, res) => {
  const id = Number(req.params.id);
  res.json(data.find(entity => entity.id === id));
};

export const update = (req, res) => {
  const id = Number(req.params.id);
  const entity = req.body;
  data = data.filter(entity => entity.id === id);
  data.push(entity);
  res.json(entity);
};

export const remove = (req, res) => {
  const id = Number(req.params.id);
  data = data.filter(entity => entity.id === id);
};
