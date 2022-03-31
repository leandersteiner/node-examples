import { getAll, get, remove, add, update } from "./model.js";

export const list = async (req, res) => {
    res.json(await getAll());
};

export const create = async (req, res) => {
    const entity = req.body;
    await add(entity);
    res.json(entity);
};

export const read = async (req, res) => {
    const id = Number(req.params.id);
    res.json(await get(id));
};

export const patch = async (req, res) => {
    const id = Number(req.params.id);
    const entity = req.body;
    await update(id, entity)
    res.json(entity);
};

export const del = async (req, res) => {
    const id = Number(req.params.id);
    await remove(id);
};