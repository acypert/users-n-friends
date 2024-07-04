import { users } from '@/lib/db/users';

export async function GET() {
  return Response.json(users);
}
