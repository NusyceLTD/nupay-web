// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {UsersState} from '../_reducers/user.reducers';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUserById = (userId: number) => createSelector(
    selectUsersState,
    usersState => usersState.entities[userId]
);

export const selectUsersPageLoading = createSelector(
    selectUsersState,
    usersState => {
        return usersState.listLoading;
    }
);

export const selectUsersActionLoading = createSelector(
    selectUsersState,
    usersState => usersState.actionsloading
);

export const selectUsersShowInitWaitingMessage = createSelector(
    selectUsersState,
    usersState => usersState.showInitWaitingMessage
);
