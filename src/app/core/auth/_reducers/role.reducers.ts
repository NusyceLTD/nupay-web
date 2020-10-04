// NGRX
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {RoleActions, RoleActionTypes} from '../_actions/role.actions';
// Models
import {Role} from '../_models/role.model';

export interface RolesState extends EntityState<Role> {
  isAllRolesLoaded: boolean;
  queryResult: Role[];
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Role> = createEntityAdapter<Role>();

export const initialRolesState: RolesState = adapter.getInitialState({
  isAllRolesLoaded: false,
  queryResult: [],
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});

export function rolesReducer(state = initialRolesState, action: RoleActions): RolesState {
  switch (action.type) {
    case RoleActionTypes.RolesPageToggleLoading:
      return {
        ...state, listLoading: action.payload.isLoading
      };
    case RoleActionTypes.RolesActionToggleLoading:
      return {
        ...state, actionsloading: action.payload.isLoading
      };
    case RoleActionTypes.RoleOnServerCreated:
      return {
        ...state
      };
    case RoleActionTypes.RoleCreated:
      return adapter.addOne(action.payload.role, {
        ...state, lastCreatedRoleId: action.payload.role.id
      });
    case RoleActionTypes.RoleUpdated:
      return adapter.updateOne(action.payload.partialrole, state);
    case RoleActionTypes.RoleDeleted:
      return adapter.removeOne(action.payload.id, state);
    case RoleActionTypes.AllRolesLoaded:
      return adapter.addAll(action.payload.roles, {
        ...state, isAllRolesLoaded: true
      });
    case RoleActionTypes.RolesPageCancelled:
      return {
        ...state, listLoading: false, queryResult: []
      };
    case RoleActionTypes.RolesPageLoaded:
      return adapter.addMany(action.payload.roles, {
        ...initialRolesState,
        listLoading: false,
        queryResult: action.payload.roles,
        showInitWaitingMessage: false
      });
    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();
