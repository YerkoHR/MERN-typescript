export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export interface Errors {
  msg: string | null;
  status: number | null;
  id?: string | null;
}

export interface GetErrors {
  type: typeof GET_ERRORS;
  error: Errors;
}
export interface ClearErrors {
  type: typeof CLEAR_ERRORS;
}

export type errorActionTypes = GetErrors | ClearErrors;
