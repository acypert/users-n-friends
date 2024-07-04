import BackButton from '@/ui/back-button';
import UserImage from '@/ui/features/users/user-image';
import UserList from '@/ui/features/users/user-list';
import { Suspense } from 'react';

export default async function UserProfile({
  params: { userId }
}: {
  params: { userId: string };
}) {
  const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
    cache: 'no-cache'
  });
  const { firstName, lastName, email, location, profileImg, friends } =
    await res.json();

  const friendsList = await Promise.all(
    friends.map(async (friendId: string) => {
      const res = await fetch(`http://localhost:3000/api/users/${friendId}`, {
        cache: 'no-cache'
      });

      return res.json();
    })
  );

  return (
    <main className="flex flex-col">
      <div className="mb-10 text-3xl text-indigo-500 font-semibold flex gap-x-3 items-center">
        <BackButton />
        <span>User Profile</span>
      </div>

      <div className="flex gap-x-4">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-[240px] w-[320px]">
              Image incoming...
            </div>
          }
        >
          <UserImage
            profileImg={profileImg}
            firstName={firstName}
            lastName={lastName}
          />
        </Suspense>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">
            {firstName} {lastName}
          </h1>
          <span>{email}</span>
          <span>{location}</span>
        </div>
      </div>
      <h2 className="text-xl font-medium mt-10 mb-2">{`${firstName}'s friends`}</h2>
      <div className="flex flex-col gap-y-3">
        {friendsList.length > 0 ? (
          <UserList users={friendsList} />
        ) : (
          <div className="font-medium text-neutral-300">{`${firstName} doesn't have any friends :'(`}</div>
        )}
      </div>
    </main>
  );
}
