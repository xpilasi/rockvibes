import connectDB from './mongodb'
import ClimbingPlace from '../models/ClimbingPlace'

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

async function seedDatabase() {
  try {
    await connectDB()
    
    // Clear existing data
    await ClimbingPlace.deleteMany({})
    
    // Insert new data
    await ClimbingPlace.insertMany(samplePlaces)
    
    console.log('Database seeded successfully')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase() 