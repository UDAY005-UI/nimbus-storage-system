declare namespace Express {
  interface UserPayload {
    id: string;
  }

  interface Request {
    user?: UserPayload;
  }
}
