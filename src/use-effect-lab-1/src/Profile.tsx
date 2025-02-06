import {useState, useEffect} from 'react';
import {fetchProfile} from "./assets/asyncBackend.tsx";

type Props = {
  username: unknown;
  children: any
}


export const Profile = ({ username, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile(username).then(setUser);
  }, []);

  return children(user);
};