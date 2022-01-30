export interface User {
  avatarUrl: string;
  name: string;
  login: string;
  bio: string;
}

export interface UserData {
  user: {
    user: User;
  };
}
