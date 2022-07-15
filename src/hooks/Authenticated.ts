import { Tokenizer } from "../pages/Auth";

export const userAuthenticated = () => {
  let connected = Tokenizer;
  const user = { isConnected: connected };
  return user.isConnected;
};
