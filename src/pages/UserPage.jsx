// src/pages/UserPage.jsx
import React, { useEffect, useState } from 'react';
import {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} from '../services/userService';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });
  const [editingId, setEditingId] = useState(null); // null = ajout, sinon édition
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Récupérer la liste des utilisateurs
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Formulaire contrôlé
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (editingId) {
        await updateUser(editingId, form);
      } else {
        await createUser(form);
      }
      setForm({ name: '', email: '' });
      setEditingId(null);
      await fetchUsers();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteUser(id);
      await fetchUsers();
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  return (
    <div>
      <h2>Utilisateurs</h2>

      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: 'red' }}>Erreur : {error.message}</p>}

      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? 'Modifier' : 'Ajouter'}</button>
        {editingId && (
          <button type="button" onClick={() => setEditingId(null)}>
            Annuler
          </button>
        )}
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
            <button onClick={() => handleEdit(user)} style={{ marginLeft: '1rem' }}>
              Modifier
            </button>
            <button onClick={() => handleDelete(user.id)} style={{ marginLeft: '0.5rem' }}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;

