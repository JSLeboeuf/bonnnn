import { NextResponse } from "next/server"

export async function GET() {
  const CAL_API_KEY = process.env.CAL_API_KEY
  const CAL_USERNAME = process.env.CAL_USERNAME
  const EVENT_TYPE_ID = process.env.EVENT_TYPE_ID

  return NextResponse.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    env: {
      hasApiKey: !!CAL_API_KEY,
      hasUsername: !!CAL_USERNAME,
      hasEventTypeId: !!EVENT_TYPE_ID,
      apiKeyLength: CAL_API_KEY?.length || 0,
      username: CAL_USERNAME || 'missing',
      eventTypeId: EVENT_TYPE_ID || 'missing'
    }
  })
}