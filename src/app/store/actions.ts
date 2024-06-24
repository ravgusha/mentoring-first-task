import { createAction,props } from "@ngrx/store";

import { IUser } from "../user";

export const getUsers = createAction('[Users] Get Users');

export const getUsersSuccess = createAction('[Users] Get Users Success', props<{users: IUser[]}>());
export const getUsersFailure = createAction('[[Users] Get Users Failure', props<{error: string}>());

export const addUser = createAction('[Users] Create User', props<{user: IUser}>());
export const removeUser = createAction('[Users] Remove User', props<{id: number}>());
export const editUser = createAction('[Users] Edit User', props<{user: IUser}>());