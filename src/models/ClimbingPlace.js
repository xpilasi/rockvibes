import mongoose from 'mongoose'

const ClimbingPlaceSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  rating: Number,
  scrImg: String,
  type: String,
  creationDate: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'climbingPlaces'  // Explicitly set collection name
})

// Remove any previous model to avoid conflicts
if (mongoose.models.ClimbingPlace) {
  delete mongoose.models.ClimbingPlace
}

// Create the model with explicit collection name
const ClimbingPlace = mongoose.model('ClimbingPlace', ClimbingPlaceSchema, 'climbingPlaces')

export default ClimbingPlace 