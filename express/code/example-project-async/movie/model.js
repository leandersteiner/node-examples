const data = [
    {
        id: 1, title: 'The Lord of the Rings - The Fellowship of the Ring', year: 2001
    },
    {
        id: 2, title: 'The Lord of the Rings: The Two Towers', year: 2002
    }
];

export const getAll = () => {
    return Promise.resolve(data);
}

export const add = entity => {
    data.push(entity);
    return Promise.resolve();
}

export const remove = id => {
    data = data.filter(entity => entity.id === id);
    return Promise.resolve();
}

export const patch = (id, entity) => {
    remove(id);
    add(entity);
    return Promise.resolve();
}

export const get = id => {
    return Promise.resolve(data.find(entity => entity.id === id));
}