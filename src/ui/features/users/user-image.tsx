import { UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface Props {
  profileImg?: string;
  firstName: string;
  lastName: string;
}

export default async function UserImage({
  profileImg,
  firstName,
  lastName
}: Props) {
  return profileImg ? (
    <Image
      src={profileImg}
      alt={`${firstName} ${lastName}`}
      width={640 / 2}
      height={480 / 2}
    />
  ) : (
    <UserIcon className="w-24 h-24 fill-indigo-500" />
  );
}
