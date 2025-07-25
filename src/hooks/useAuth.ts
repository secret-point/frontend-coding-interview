import { useState } from "react";
import { storage } from "../utils/storage";

const AUTH_KEY = "Auth_KEY";

export function isAuthed() {
  return Boolean(storage.get(AUTH_KEY));
}

export function useAuth() {
  const [authed, setAuthed] = useState<boolean>(isAuthed());

  const signIn = (username: string) => {
    storage.set(AUTH_KEY, JSON.stringify({ username, ts: Date.now() }));
    setAuthed(true);
  };

  const signOut = () => {
    storage.remove(AUTH_KEY);
    setAuthed(false);
  };

  return { authed, signIn, signOut };
}
