import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import ClimbingPlace from '@/models/ClimbingPlace'

// GET single climbing place
export async function GET(request, { params }) {
  try {
    await connectDB()
    const place = await ClimbingPlace.findById(params.id)
    if (!place) {
      return NextResponse.json({ error: 'Place not found' }, { status: 404 })
    }
    return NextResponse.json(place, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// PUT update climbing place
export async function PUT(request, { params }) {
  try {
    await connectDB()
    const data = await request.json()
    const place = await ClimbingPlace.findByIdAndUpdate(params.id, data, {
      new: true,
      runValidators: true
    })
    if (!place) {
      return NextResponse.json({ error: 'Place not found' }, { status: 404 })
    }
    return NextResponse.json(place, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// DELETE climbing place
export async function DELETE(request, { params }) {
  try {
    await connectDB()
    const place = await ClimbingPlace.findByIdAndDelete(params.id)
    if (!place) {
      return NextResponse.json({ error: 'Place not found' }, { status: 404 })
    }
    return NextResponse.json({ message: 'Place deleted successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
} 