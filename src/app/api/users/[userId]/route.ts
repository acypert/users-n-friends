import { users } from '@/lib/db/users';

export async function GET(
  _: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  const u = users.find(user => user.id === userId);
  return u
    ? Response.json(u)
    : Response.json({ message: 'User not found' }, { status: 404 });
}
