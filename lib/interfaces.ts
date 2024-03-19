export interface ILayoutState {
  show: boolean;
  openSideBar: boolean;
  toggleSideBar: () => void;
  expandSidebar: () => void;
}

export interface IUserProfile {
  id: string;
  email: string;
  username: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
  setUserData: (data: IUserProfile) => void;
}
