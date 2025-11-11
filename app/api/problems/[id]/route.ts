import { NextRequest, NextResponse } from 'next/server';
import { getProblemServer } from '@/lib/data/problems.server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const problem = await getProblemServer(id);

    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(problem);
  } catch (error) {
    return NextResponse.json(
      { error: 'Problem not found' },
      { status: 404 }
    );
  }
}
