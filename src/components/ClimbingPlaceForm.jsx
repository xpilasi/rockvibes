'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ClimbingPlaceForm = () => {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    console.log('Starting upload...'); // Debug log

    try {
      console.log('Cloud name:', process.env.NEXT_PUBLIC_CLOUD_NAME); // Debug log
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: data
        }
      );

      console.log('Response status:', response.status); // Debug log
      const file = await response.json();
      console.log('Upload response:', file); // Debug log

      setFormData(prev => ({
        ...prev,
        srcImg: file.secure_url
      }));
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
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-rift-bold mb-6 text-center">Add New Climbing Place</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <label className="block font-rift-medium mb-2">Image</label>
          <input
            type="file"
            name="file"
            onChange={uploadImage}
            className="w-full"
          />
          {formData.srcImg && (
            <div className="mt-4">
              <img
                src={formData.srcImg}
                alt="Preview"
                className="w-full max-h-48 object-cover rounded"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-Custom-pink to-Custom-dark-pink hover:from-Custom-dark-pink hover:to-Custom-pink cursor-pointer text-white font-rift-bold py-3 rounded transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? 'Adding...' : 'Add Climbing Place'}
        </button>
      </form>
    </div>
  );
};

export default ClimbingPlaceForm; 