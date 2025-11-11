import { NextResponse } from 'next/server';
import { getAllProblemsServer } from '@/lib/data/problems.server';

export async function GET() {
  try {
    const problems = await getAllProblemsServer();
    return NextResponse.json(problems);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load problems' },
      { status: 500 }
    );
  }
}
