export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export interface Errors {
  msg: object;
  status: number | null;
  id: string | null;
}

export interface getErrors {
  type: typeof GET_ERRORS;
  error: Errors;
}
export interface clearErrors {
  type: typeof CLEAR_ERRORS;
}
