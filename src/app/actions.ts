'use server';

import { db } from '@/db';
import { waitlist } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function joinWaitlist(email: string) {
  try {
    // Check if email already exists
    const existing = await db.query.waitlist.findFirst({
      where: eq(waitlist.email, email),
    });

    if (existing) {
      return { success: true, message: 'Already joined' };
    }

    await db.insert(waitlist).values({ email });
    return { success: true };
  } catch (error) {
    console.error('Waitlist error:', error);
    return { success: false, error: 'Failed to join waitlist' };
  }
}
