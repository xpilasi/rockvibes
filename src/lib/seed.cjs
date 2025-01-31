const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/rockvibesData';

const samplePlaces = [
  // ... your sample data ...
];

const ClimbingPlaceSchema = new mongoose.Schema({
  // ... your schema ...
}, { collection: 'climbingPlaces' });

const ClimbingPlace = mongoose.models.ClimbingPlace || mongoose.model('ClimbingPlace', ClimbingPlaceSchema);

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected successfully to MongoDB');
    
    console.log('Clearing existing data...');
    const deleteResult = await ClimbingPlace.deleteMany({});
    console.log('Cleared existing data:', deleteResult);
    
    console.log('Inserting new data...');
    const insertResult = await ClimbingPlace.insertMany(samplePlaces);
    console.log('Inserted documents:', insertResult.length);
    
    const count = await ClimbingPlace.countDocuments();
    console.log(`Total documents in collection: ${count}`);
    
    console.log('Database seeded successfully');
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 