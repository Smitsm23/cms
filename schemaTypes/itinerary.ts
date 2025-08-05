// === 1. SANITY SCHEMAS ===
// File: sanity/schemas/itinerary.js
export default {
  name: 'itinerary',
  title: 'Itinerary',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 }
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'region',
      title: 'Region',
      type: 'string'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. 14 Days, Weekend, etc.'
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' }
      ]
    }
  ]
};