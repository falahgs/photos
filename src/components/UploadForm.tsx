'use client'

import { useState } from 'react'

export default function UploadForm() {
  const [uploading, setUploading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUploading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('/api/images', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) throw new Error('Upload failed')

      // Reset form and refresh images
      e.currentTarget.reset()
      // You might want to trigger a refresh of the ImageGrid here
    } catch (error) {
      console.error('Upload error:', error)
      alert('Failed to upload image')
    } finally {
      setUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="space-y-4">
        <input
          type="file"
          name="file"
          accept="image/*"
          required
          className="w-full"
        />
        <input
          type="text"
          name="title"
          placeholder="Image title"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="details"
          placeholder="Additional details"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
        >
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
      </div>
    </form>
  )
} 