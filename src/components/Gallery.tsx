import Image from 'next/image'

const images = [
  {
    id: 1,
    title: 'Abstract Art',
    description: 'Modern abstract painting with vibrant colors',
    src: 'https://source.unsplash.com/800x600/?abstract,art',
  },
  {
    id: 2,
    title: 'Nature Photography',
    description: 'Beautiful landscape photography',
    src: 'https://source.unsplash.com/800x600/?nature,landscape',
  },
  {
    id: 3,
    title: 'Digital Art',
    description: 'Contemporary digital artwork',
    src: 'https://source.unsplash.com/800x600/?digital,art',
  },
  {
    id: 4,
    title: 'Street Art',
    description: 'Urban street art and graffiti',
    src: 'https://source.unsplash.com/800x600/?street,art',
  },
  {
    id: 5,
    title: 'Portrait',
    description: 'Artistic portrait photography',
    src: 'https://source.unsplash.com/800x600/?portrait,art',
  },
  {
    id: 6,
    title: 'Sculpture',
    description: 'Modern sculpture and 3D art',
    src: 'https://source.unsplash.com/800x600/?sculpture',
  },
]

export default function Gallery() {
  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Artworks
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our curated collection of stunning artworks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 