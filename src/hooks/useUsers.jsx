import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/usersThunk';
import { selectAllUsers, selectUsersStatus, selectUsersError } from '../features/users/usersSelectors';

export function useUsers() {
    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);
    const status = useSelector(selectUsersStatus);
    const error = useSelector(selectUsersError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    return { users, status, error };
}
