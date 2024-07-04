import { User } from '@/lib/db/users';
import UserList from '../ui/features/users/user-list';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'no-cache'
  });
  const users: User[] = await res.json();

  return (
    <main className="flex min-h-screen flex-col">
      <div className="mb-12 text-3xl text-indigo-500 font-semibold">
        Available Users
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="grid grid-cols-3 gap-x-20 mb-3 text-xl font-medium text-neutral-300 px-10">
          <div>User name</div>
          <div>User Location</div>
          <div>User email</div>
        </div>
        <UserList users={users} />
      </div>
    </main>
  );
}
