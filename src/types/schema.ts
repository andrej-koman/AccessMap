/**
 * This is the schema for the User entity.
 */
export type User = {
  id: number;
  token: string;
  disabilityId: number;
  roleId: number;
  expirationDate: Date;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * This is the schema for the Marker entity.
 */
export type Marker = {
  name: string;
  lat: number;
  lng: number;
  markerType: string;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * This is the schema for the MarkerDisability entity.
 */
export type MarkerDisability = {
  id: number;
  markerId: number;
  disabilityId: number;
};

/**
 * This is the schema for the UserDisability entity.
 */
export type UserDisability = {
  id: number;
  userId: number;
  disabilityId: number;
};

/**
 * This is the schema for the Disability entity.
 */
export type Disability = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * This is the schema for the Role entity.
 */
export type Role = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
