import { NextResponse } from 'next/server';

// Temporary data for testing
const mockImages = [
  {
    id: 1,
    title: 'Image 1',
    description: 'Description for image 1',
    details: 'Additional details here',
    imageUrl: '/1.jpg'
  },
  {
    id: 2,
    title: 'Image 2',
    description: 'Description for image 2',
    details: 'Additional details here',
    imageUrl: '/2.jpg'
  }
];

export async function GET() {
  try {
    // Return mock data for now
    return NextResponse.json(mockImages);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const details = formData.get('details') as string;

    // For now, just return a success response
    return NextResponse.json({
      success: true,
      message: 'Image uploaded successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    );
  }
} 