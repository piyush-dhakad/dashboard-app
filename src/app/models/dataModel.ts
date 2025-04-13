export interface TableColumn {
  column_key: string;
  column_name: string;
  type: string;
  align: 'left' | 'center' | 'right';
}

export interface Name {
  first_name: string;
  last_name: string;
  handle: string;
}

export interface Team {
  text_color: string;
  background_color: string;
  value: string;
}

export interface User {
  id: string;
  name: Name;
  status: string;
  email: string;
  role: string;
  license_used: number;
  teams: Team[];
}

// Utility function for creating default User objects
export function createDefaultUser(): User {
  return {
    id: '',
    name: {
      first_name: '',
      last_name: '',
      handle: ''
    },
    status: '',
    email: '',
    role: '',
    license_used: 0,
    teams: []
  };
}
