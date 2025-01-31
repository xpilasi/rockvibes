import mongoose from 'mongoose'

const MONGODB_URI = 'mongodb://localhost:27017/rockvibesData'

const samplePlaces = [
  {
    title: "Boulder Box",
    description: "Indoor climbing gym with great bouldering walls and friendly community",
    location: "Madrid",
    rating: 4,
    scrImg: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
    type: "indoor"
  },
  {
    title: "La Pedriza",
    description: "Famous outdoor climbing area with granite walls and multiple routes",
    location: "Madrid",
    rating: 5,
    scrImg: "https://www.desnivel.com/images/2019/04/img-20181017-wa0008-750x440.jpg",
    type: "outdoor"
  },
  {
    title: "Sharma Climbing BCN",
    description: "Modern climbing facility designed by Chris Sharma",
    location: "Barcelona",
    rating: 5,
    scrImg: "https://images.unsplash.com/photo-1583656696771-2afded31a36c",
    type: "indoor"
  },
  {
    title: "Siurana",
    description: "World-class sport climbing destination with limestone cliffs",
    location: "Tarragona",
    rating: 5,
    scrImg: "https://images.unsplash.com/photo-1578763363228-6e8428de69b2",
    type: "outdoor"
  },
  {
    title: "The Climb",
    description: "Urban climbing gym with routes for all levels",
    location: "Valencia",
    rating: 4,
    scrImg: "https://images.unsplash.com/photo-1578763363228-6e8428de69b2",
    type: "indoor"
  }
]

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
}, { collection: 'climbingPlaces' })

const ClimbingPlace = mongoose.models.ClimbingPlace || mongoose.model('ClimbingPlace', ClimbingPlaceSchema)

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...')
    await mongoose.connect(MONGODB_URI)
    console.log('Connected successfully to MongoDB')
    
    // Get database reference
    const db = mongoose.connection.db
    
    // List all collections before
    const collectionsBefore = await db.listCollections().toArray()
    console.log('Collections before:', collectionsBefore.map(c => c.name))
    
    // Get collection (will create if doesn't exist)
    const collection = db.collection('climbingPlaces')
    
    // Clear existing data
    console.log('Clearing existing data...')
    await collection.deleteMany({})
    
    // Insert new data
    console.log('Inserting new data...')
    const result = await collection.insertMany(samplePlaces)
    console.log(`Inserted ${result.insertedCount} documents`)
    
    // Verify the data
    const count = await collection.countDocuments()
    console.log(`Total documents in collection: ${count}`)
    
    // List all collections after
    const collectionsAfter = await db.listCollections().toArray()
    console.log('Collections after:', collectionsAfter.map(c => c.name))
    
    // Show some sample data
    const sampleDoc = await collection.findOne({})
    console.log('Sample document:', sampleDoc)
    
    console.log('Database seeded successfully')
    await mongoose.connection.close()
    console.log('MongoDB connection closed')
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase() 