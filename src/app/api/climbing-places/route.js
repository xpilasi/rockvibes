import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import connectDB from '@/lib/mongodb'
import ClimbingPlace from '@/models/ClimbingPlace'
import clientPromise from '@/lib/mongodb'

export const dynamic = 'force-dynamic' // Disable caching
export const revalidate = 0

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("rockvibesData");
    
    // Fetch all climbing places
    const climbingPlaces = await db
      .collection("climbingPlaces")
      .find({})
      .sort({ createdAt: -1 }) // Sort by newest first
      .toArray();

    return NextResponse.json(climbingPlaces);

  } catch (error) {
    console.error('Error fetching climbing places:', error);
    return NextResponse.json(
      { error: 'Failed to fetch climbing places' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    const client = await clientPromise;
    const db = client.db("rockvibesData");
    
    const climbingPlace = {
      title: data.title,
      description: data.description,
      location: data.location,
      rating: parseInt(data.rating),
      srcImg: data.srcImg,
      type: data.type,
      createdAt: new Date(),
    };

    const result = await db.collection("climbingPlaces").insertOne(climbingPlace);

    return NextResponse.json({ 
      message: 'Success', 
      id: result.insertedId 
    }, { status: 201 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to add climbing place' },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db("rockvibesData");
    const deleteResult = await db.collection("climbingPlaces").deleteMany({});
    
    return NextResponse.json({ 
      message: `Deleted ${deleteResult.deletedCount} documents`,
      success: true,
      deletedCount: deleteResult.deletedCount
    });
  } catch (error) {
    console.error('Error during cleanup:', error);
    return NextResponse.json({ 
      error: error.message,
      success: false 
    }, { status: 500 });
  }
}

