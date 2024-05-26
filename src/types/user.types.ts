export type User = {
  id: string;
  username: string;
  email: string;
  avatar: string;
  settings: UserSettings;
};

export type UserSettings = {
  theme: 'dark' | 'light';
  language: 'en' | 'es';
};