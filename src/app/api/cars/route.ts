import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const page = searchParams.get('_page') || '1';
  const limit = searchParams.get('_limit') || '12';
  const sort = searchParams.get('_sort') || '';
  const order = searchParams.get('_order') || '';

  let apiUrl = `https://testing-api.ru-rating.ru/cars?_limit=${limit}&_page=${page}`;
  
  if (sort && order) {
    apiUrl += `&_sort=${sort}&_order=${order}`;
  }

  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch cars');
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cars' },
      { status: 500 }
    );
  }
}