// app/api/auth/logout/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = await cookies()
  cookieStore.delete('token')
  cookieStore.delete('refresh_token')

  return NextResponse.json(
    { message: 'Logged out successfully' },
    { status: 200 }
  )
}
