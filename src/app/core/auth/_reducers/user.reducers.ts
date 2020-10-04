// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {UserActions, UserActionTypes} from '../_actions/user.actions';
// Models
import {User} from '../_models/user.model';

// tslint:disable-next-line:no-empty-interface
export interface UsersState extends EntityState<User> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialUsersState: UsersState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});

export function usersReducer(state = initialUsersState, action: UserActions): UsersState {
  switch (action.type) {
    case UserActionTypes.UsersPageToggleLoading:
      return {
        ...state, listLoading: action.payload.isLoading
      };
    case UserActionTypes.UsersActionToggleLoading:
      return {
        ...state, actionsloading: action.payload.isLoading
      };
    case UserActionTypes.UserOnServerCreated:
      return {
        ...state
      };
    case UserActionTypes.UserCreated:
      return adapter.addOne(action.payload.user, {
        ...state, lastCreatedUserId: action.payload.user.id
      });
    case UserActionTypes.UserUpdated:
      return adapter.updateOne(action.payload.partialUser, state);
    case UserActionTypes.UserDeleted:
      return adapter.removeOne(action.payload.id, state);
    case UserActionTypes.UsersPageCancelled:
      return {
        ...state, listLoading: false
      };
    case UserActionTypes.UsersPageLoaded: {
      return adapter.addMany(action.payload.users, {
        ...initialUsersState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getUserState = createFeatureSelector<UsersState>('users');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
