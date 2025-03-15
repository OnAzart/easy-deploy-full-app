import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const toolName = searchParams.get('toolName');

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  console.log("NEXT_PUBLIC_BACKEND_URL:", backendUrl); // Log the backend URL (Verification)

  try {
    console.log("Fetching from:", `${backendUrl}?tool_name=${toolName}`); // Log the full URL
    const response = await fetch(`${backendUrl}?tool_name=${toolName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error("Backend responded with error:", response.status, response.statusText);
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Backend response:", data); // Log the response data
    return NextResponse.json({ summary: data.summary });
  } catch (error: any) { // Specify type for error
    console.error("Error calling backend:", error);
    return NextResponse.json({ error: 'Failed to get summary from backend' }, { status: 500 });
  }
} 