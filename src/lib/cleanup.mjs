import mongoose from 'mongoose'

const MONGODB_URI = 'mongodb://localhost:27017/rockvibesData'

async function cleanupDatabase() {
  try {
    console.log('Connecting to MongoDB...')
    await mongoose.connect(MONGODB_URI)
    console.log('Connected successfully to MongoDB')
    
    // Get all collections
    const collections = await mongoose.connection.db.listCollections().toArray()
    console.log('Found collections:', collections.map(c => c.name))
    
    // Drop each collection
    for (const collection of collections) {
      console.log(`Dropping collection: ${collection.name}`)
      await mongoose.connection.db.dropCollection(collection.name)
    }
    
    console.log('All collections dropped successfully')
    await mongoose.connection.close()
    console.log('MongoDB connection closed')
  } catch (error) {
    console.error('Error cleaning database:', error)
    process.exit(1)
  }
}

cleanupDatabase() 