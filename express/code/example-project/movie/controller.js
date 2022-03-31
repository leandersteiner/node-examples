const data = [
    {
        id: 1, title: 'The Lord of the Rings - The Fellowship of the Ring', year: 2001
    },
    {
        id: 2, title: 'The Lord of the Rings: The Two Towers', year: 2002
    }
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