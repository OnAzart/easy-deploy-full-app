import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const toolName = searchParams.get('toolName');

  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000/summarize';
    const response = await fetch(`${backendUrl}?tool_name=${toolName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ summary: data.summary });
  } catch (error) {
    console.error("Error calling backend:", error);
    return NextResponse.json({ error: 'Failed to get summary from backend' }, { status: 500 });
  }
} 