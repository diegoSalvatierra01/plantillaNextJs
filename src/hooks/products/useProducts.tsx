import { useEffect, useState } from 'react';

export default function UseUserDataCookie() {
  const [newUser, setNewUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await fetch('/api/user');
      const data = await res.json();
      setNewUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return newUser;
}
