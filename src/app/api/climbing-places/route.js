import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import connectDB from '@/lib/mongodb'
import ClimbingPlace from '@/models/ClimbingPlace'

export const dynamic = 'force-dynamic' // Disable caching
export const revalidate = 0

// GET all climbing places
export async function GET() {
  try {
    console.log('API Route: Starting GET request')
    await connectDB()
    console.log('API Route: Connected to MongoDB')
    
    // Log connection details
    console.log('Database:', mongoose.connection.db.databaseName)
    
    // Get all collections
    const collections = await mongoose.connection.db.listCollections().toArray()
    console.log('Available collections:', collections.map(c => c.name))
    
    // Try direct MongoDB query
    const db = mongoose.connection.db
    const directResults = await db.collection('climbingPlaces').find({}).toArray()
    console.log('Direct MongoDB query results:', directResults.length)
    
    // Use Mongoose model
    const places = await ClimbingPlace.find({}).lean()
    console.log('Mongoose query results:', places.length)

    if (places.length === 0) {
      console.log('No documents found in climbingPlaces collection')
      // Try to find why by checking schema
      console.log('Model name:', ClimbingPlace.modelName)
      console.log('Collection name:', ClimbingPlace.collection.name)
    }

    return NextResponse.json(places, {
      headers: {
        'Cache-Control': 'no-store, must-revalidate',
        'Pragma': 'no-cache',
      },
    })
  } catch (error) {
    console.error('API Route Error:', error)
    console.error('Error stack:', error.stack)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST new climbing place
export async function POST(request) {
  try {
    await connectDB()
    const data = await request.json()
    const place = await ClimbingPlace.create(data)
    return NextResponse.json(place, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// Add a cleanup endpoint to remove old data
export async function DELETE() {
  try {
    await connectDB()
    
    // Log before deletion
    console.log('\n=== BEFORE DELETION ===')
    const beforeDocs = await ClimbingPlace.find({}).lean()
    console.log('Documents count:', beforeDocs.length)
    
    // Delete documents with creation date 2025-01-31T08:03:22
    const deleteResult = await ClimbingPlace.deleteMany({
      creationDate: { 
        $lt: new Date('2025-01-31T08:36:31.000Z') // Delete older documents
      }
    })
    
    // Log after deletion
    console.log('\n=== AFTER DELETION ===')
    const afterDocs = await ClimbingPlace.find({}).lean()
    console.log('Documents count:', afterDocs.length)
    console.log('Deleted count:', deleteResult.deletedCount)
    
    return NextResponse.json({ 
      message: `Deleted ${deleteResult.deletedCount} documents`,
      remainingCount: afterDocs.length,
      remainingDocs: afterDocs
    })
  } catch (error) {
    console.error('Error cleaning up:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

async function cleanupOldData() {
  try {
    const response = await fetch('/api/climbing-places', {
      method: 'DELETE'
    });
    const result = await response.json();
    console.log('Cleanup result:', result);
    
    // Refresh the page to see updated data
    window.location.reload();
  } catch (error) {
    console.error('Error during cleanup:', error);
  }
}

// Run the cleanup
cleanupOldData(); 