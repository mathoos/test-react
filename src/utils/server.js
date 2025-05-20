export const BASE_URL = 'http://localhost:3001';

export async function fetchData(endpoint) {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`);
        if (!res.ok) {
            throw new Error(`Erreur ${res.status}`);
        }
        return await res.json();
    } 
    catch (err) {
        console.error('Erreur API :', err);
        throw err;
    }
}
