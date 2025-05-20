import { fetchData } from '../../utils/server';

export const getAllUsers = () => fetchData('/interimaires');

