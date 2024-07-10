export interface RefreshTokenI {
  id: string;
  issuedAt: Date;
  revokedAt: Date | null;
  token: string;
  userId: string;
  expiresAt: Date;
  createdAt: Date;
}
