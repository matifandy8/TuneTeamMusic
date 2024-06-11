"use server";

import { db } from "@/db";
import { rooms } from "@/db/schema/rooms";

export async function createRoom(
  { name }: { name: string },
  roomId: string,
  userId: string
) {
  await db.insert(rooms).values({
    id: roomId,
    name: name,
    created_by: userId,
  });

  return {
    roomId: roomId,
  };
}
