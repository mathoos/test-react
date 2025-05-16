import axios from 'axios';

// Création d'une instance axios configurée
export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // API de test gratuite
    timeout: 5000, // délai d'attente max (en ms)
});

// Intercepteur pour gérer les erreurs globales (optionnel)
api.interceptors.response.use(
    response => response,
    error => {
        console.error('Erreur API :', error);
        return Promise.reject(error); // à propager dans le composant
    }
);