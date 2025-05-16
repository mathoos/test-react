import { api } from './api';

// 🔍 GET - Récupérer les utilisateurs
export const getUsers = async () => {
    const res = await api.get('/users');
    return res.data;
};

// 🔼 POST - Ajouter un utilisateur
export const createUser = async (user) => {
    const res = await api.post('/users', user);
    return res.data;
};

// ✏️ PUT - Modifier un utilisateur
export const updateUser = async (id, updatedData) => {
    const res = await api.put(`/users/${id}`, updatedData);
    return res.data;
};

// 🗑 DELETE - Supprimer un utilisateur
export const deleteUser = async (id) => {
    const res = await api.delete(`/users/${id}`);
    return res.data;
};
