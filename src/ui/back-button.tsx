'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button className="w-10 h-10 stroke-indigo-500 text-indigo-500">
      <ArrowLeftIcon onClick={() => router.back()} />
    </button>
  );
}
