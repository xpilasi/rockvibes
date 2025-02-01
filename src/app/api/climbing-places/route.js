import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import connectDB from '@/lib/mongodb'
import ClimbingPlace from '@/models/ClimbingPlace'

export const dynamic = 'force-dynamic' // Disable caching
export const revalidate = 0

const handler = async () => {
  try {
    await connectDB()
    const places = await ClimbingPlace.find({}).lean()
    return NextResponse.json(places)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export { handler as GET }

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

// Removed DELETE route temporarily

export async function DELETE(request) {
  try {
    await connectDB()
    const deleteResult = await ClimbingPlace.deleteMany({})
    return NextResponse.json({ 
      message: `Deleted ${deleteResult.deletedCount} documents`,
      success: true,
      deletedCount: deleteResult.deletedCount
    })
  } catch (error) {
    console.error('Error during cleanup:', error)
    return NextResponse.json({ 
      error: error.message,
      success: false 
    }, { status: 500 })
  }
}

