import { User } from '@/lib/db/users';
import clsx from 'clsx';
import Link from 'next/link';

export default function UserList({ users }: { users: User[] }) {
  const sorted = users.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));

  return sorted.map(({ id, firstName, lastName, location, email }, i) => (
    <Link
      href={`/users/${id}`}
      key={id}
      className={clsx(
        'grid grid-cols-3 gap-x-20 text-xl px-10 py-6 rounded hover:bg-surface-200',
        {
          'bg-surface-300': i % 2 === 0,
          'bg-surface-100': i % 2 !== 0
        }
      )}
    >
      <span className="text-xl font-semibold text-left">
        {firstName} {lastName}
      </span>
      <span className="text-neutral-200">{location}</span>
      <span className="text-neutral-200">{email}</span>
    </Link>
  ));
}
