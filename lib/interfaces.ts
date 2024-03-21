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

export interface ICarrier {
  id?: string | null;
  first_name: string;
  last_name: string;
  email?: string | null;
  phone: string;
  address: string;
  city: string;
  state: string;
}
