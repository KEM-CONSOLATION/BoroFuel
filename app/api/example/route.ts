import { NextResponse } from 'next/server';

/**
 * Example API route
 * 
 * This is a template for future API routes.
 * Access this at: https://borofuel.org/api/example
 * 
 * You can add more API routes in the app/api/ directory.
 * Each folder becomes an API endpoint.
 */

export async function GET() {
  return NextResponse.json({
    message: 'API is working!',
    timestamp: new Date().toISOString(),
    status: 'success',
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    return NextResponse.json({
      message: 'POST request received',
      data: body,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON in request body' },
      { status: 400 }
    );
  }
}

