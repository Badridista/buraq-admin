export interface ApiResponse {
  _id: string;
  owner: string;
  status: string;
  createdAt: string;
  settings?: {
    _id: string;
    name: string;
    id: string;
  };
  teamSize: {
    min?: number;
    max?: number;
    current?: number;
  };
  id: string;
}

// Define the structure of the data for the Table
export interface AdminPortalData {
  accountID: string;
  accountName: string;
  owner: string;
  status: string;
  createdUTC: string;
}
