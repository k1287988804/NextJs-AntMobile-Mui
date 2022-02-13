import React from 'react';

export interface IGlobalContext {
  setting: ISetting;
  i18n: Record<string, unknown>;
  locale: string | undefined;
  locales: Array<string>;
  pages: IPage[];
  categories: ICategory[];
  tags: ITag[];
  changeLocale: (arg: string) => void;
  user: IUser | null;
  setUser: (arg: IUser) => void;
  removeUser: () => void;
  title: string;
  titleDispatch: Function;
}

export const GlobalContext = React.createContext<IGlobalContext>({
  setting: {},
  i18n: {},
  locale: '',
  locales: [],
  pages: [],
  categories: [],
  tags: [],
  changeLocale: () => {},
  user: null,
  setUser: () => {},
  removeUser: () => {},
  title: '',
  titleDispatch: () => {}
});

export const UPDATE_TITLE = "UPDATE_TITLE"

export const titleReducer = (state: any, action: {type: string, title: string}) => {
  if( action.type === "UPDATE_TITLE") {
    return action.title
  }
  return state
}
