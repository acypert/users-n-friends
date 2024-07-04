import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-20 bg-surface-300 text-white">
      <Link href={'/'} className="text-2xl font-semibold">
        Users and Friends
      </Link>
    </header>
  );
}
