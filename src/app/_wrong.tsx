import { useState, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  followers: number;
  following: number;
} 


const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUser(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (data: Partial<User>) => {
    try {
      await fetch("/api/user", {
        method: "PUT",
        body: JSON.stringify(data),
      });
      fetchUser(); // Refresh data
    } catch (e) {
      setError(e as Error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <form onSubmit={/* form logic */}>{/* Complex form fields */}</form>
      <UserStats userId={user.id} />
      <UserPosts userId={user.id} />
    </div>
  );
};