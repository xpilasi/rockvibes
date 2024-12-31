// ... existing code ...

const Page = () => {
    const preset_name = "rockvibes_foto";
    const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME;
  
    const [imageFile, setImageFile] = useState(null); // Nuevo estado para guardar el archivo
    const [imageUrl, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({  // Nuevo estado para el formulario
      name: '',
      description: ''
    });
  
    // Modificamos para solo guardar el archivo seleccionado
    const handleFileSelect = (e) => {
      setImageFile(e.target.files[0]);
    };
  
    // Nueva función para manejar cambios en el formulario
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    // Nueva función que maneja todo el guardado
    const handleSave = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        // Primero subimos la imagen a Cloudinary
        const imageData = new FormData();
        imageData.append('file', imageFile);
        imageData.append('upload_preset', preset_name);
  
        const uploadResponse = await fetch(
          `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
          {
            method: 'POST',
            body: imageData
          }
        );
  
        const uploadedImage = await uploadResponse.json();
        const imageUrl = uploadedImage.secure_url;
  
        // Aquí hacemos el POST a MongoDB con todos los datos
        const response = await fetch('/api/places', {  // Ajusta la URL según tu API
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            description: formData.description,
            imageUrl: imageUrl
          })
        });
  
        if (!response.ok) throw new Error('Error saving place');
  
        // Limpiar el formulario después de guardar
        setFormData({ name: '', description: '' });
        setImageFile(null);
        setImage('');
        
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <Layout>
        {/* ... existing layout code ... */}
        
        <div className='flex flex-row gap-2'>
          <div className='flex flex-col gap-2'>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Nombre lugar'
              className='border h-10 py-3 px-3'
            />
            
            <div className="bg-red-300">
              <label htmlFor="file-upload" className="cursor-pointer w-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600">
                Upload image
              </label>
              <input 
                id="file-upload" 
                type="file" 
                className="sr-only"
                name="file"
                onChange={handleFileSelect}
              />
            </div>
  
            <button 
              className='h-full bg-pink-300 hover:bg-CustomPink text-white'
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
          
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder='Describe el lugar'
            className='border h-40 w-full py-3 px-3'
          />
        </div>
        
        {/* ... rest of the code ... */}
      </Layout>
    );
  };