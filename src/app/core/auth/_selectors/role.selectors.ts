// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import * as fromRole from '../_reducers/role.reducers';
import {RolesState} from '../_reducers/role.reducers';

export const selectRolesState = createFeatureSelector<RolesState>('roles');

export const selectRoleById = (roleId: number) => createSelector(
  selectRolesState,
  rolesState => rolesState.entities[roleId]
);

export const selectAllRoles = createSelector(
  selectRolesState,
  fromRole.selectAll
);

export const selectAllRolesIds = createSelector(
  selectRolesState,
  fromRole.selectIds
);

export const allRolesLoaded = createSelector(
  selectRolesState,
  rolesState => rolesState.isAllRolesLoaded
);


export const selectRolesPageLoading = createSelector(
  selectRolesState,
  rolesState => rolesState.listLoading
);

export const selectRolesActionLoading = createSelector(
  selectRolesState,
  rolesState => rolesState.actionsloading
);

export const selectRolesShowInitWaitingMessage = createSelector(
  selectRolesState,
  rolesState => rolesState.showInitWaitingMessage
);

