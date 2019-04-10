export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";

export interface Auth {
  token: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean | null;
  user: string | null;
}

export interface userLoading {
  type: typeof USER_LOADING;
}
export interface userLoaded {
  type: typeof USER_LOADED;
  user: string;
}
