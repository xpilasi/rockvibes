'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Title from '@/components/Title';

const ClimbingPlaceForm = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    rating: 0,
    srcImg: '',
    type: 'indoor'
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'rockvibes_foto');

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: data
        }
      );

      const file = await response.json();
      setFormData(prev => ({
        ...prev,
        srcImg: file.secure_url
      }));
      
      // Show snackbar
      setShowSnackbar(true);
      // Hide snackbar after 3 seconds
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);

    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/climbing-places', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
      router.refresh();

    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add climbing place');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h2 className="text-3xl font-rift-bold mb-6">Place Added Successfully!</h2>
        <p className="mb-6">Your climbing place has been added to the database.</p>
        <Link 
          href="/where-to-climb"
          className="inline-block bg-gradient-to-r from-Custom-pink to-Custom-dark-pink text-white font-rift-bold py-3 px-6 rounded hover:from-Custom-dark-pink hover:to-Custom-pink transition-all duration-300"
        >
          View All Places
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 relative">
      <Title title="Add Climbing Place" subtitle="Add Climbing Place" text="Add Climbing Place" />
      
      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block font-rift-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-custom-pink"
              required
            />
          </div>

          <div>
            <label className="block font-rift-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded h-32 focus:outline-none focus:border-custom-pink"
              required
            />
          </div>

          <div>
            <label className="block font-rift-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-custom-pink"
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 lg:flex lg:flex-col lg:justify-between">
          <div>
            <label className="block font-rift-medium mb-2">Rating</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-custom-pink"
              required
            />
          </div>

          <div>
            <label className="block font-rift-medium mb-2">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-custom-pink"
              required
            >
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
            </select>
          </div>

          <div>
            
            <div className="relative">
              <input
                type="file"
                name="file"
                onChange={uploadImage}
                className="hidden"
                id="file-upload"
                accept="image/*"
              />
              <label
                htmlFor="file-upload"
                className="w-full bg-gradient-to-r from-Custom-pink to-Custom-dark-pink hover:from-Custom-dark-pink hover:to-Custom-pink cursor-pointer text-white font-rift-bold py-3 px-4 rounded transition-all duration-300 inline-block text-center"
              >
                {isLoading ? 'Uploading...' : 'Choose Image'}
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-Custom-pink to-Custom-dark-pink hover:from-Custom-dark-pink hover:to-Custom-pink cursor-pointer text-white font-rift-bold py-3 rounded transition-all duration-300 disabled:opacity-50 mt-6"
          >
            {isLoading ? 'Adding...' : 'Add Climbing Place'}
          </button>
        </div>
      </form>

      {/* Snackbar */}
      <div 
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
          showSnackbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        }`}
      >
        Image uploaded successfully!
      </div>
    </div>
  );
};

export default ClimbingPlaceForm; 