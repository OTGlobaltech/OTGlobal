"use client";

import CrudTable from './CrudTable';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';

export default function AdminReviews() {
  const columns = [
    { key: 'name', label: 'Client Name' },
    { key: 'company', label: 'Company / Role' },
    { 
      key: 'rating', 
      label: 'Rating',
      render: (row) => (
        <div className="flex items-center text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < (row.rating || 5) ? 'fill-current' : 'text-gray-300'}`} />
          ))}
        </div>
      )
    },
    { 
      key: 'featured', 
      label: 'Featured',
      render: (row) => row.featured ? 'Yes' : 'No'
    }
  ];

  const defaultValues = {
    name: '',
    company: '',
    review: '',
    rating: 5,
    imageUrl: '',
    featured: false
  };

  const renderForm = ({ formData, updateField }) => (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Client Name</Label>
          <Input 
            id="name" 
            value={formData.name} 
            onChange={(e) => updateField('name', e.target.value)} 
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company / Role</Label>
          <Input 
            id="company" 
            value={formData.company} 
            onChange={(e) => updateField('company', e.target.value)} 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="rating">Rating (1-5)</Label>
          <Input 
            id="rating" 
            type="number"
            min="1"
            max="5"
            value={formData.rating} 
            onChange={(e) => updateField('rating', parseInt(e.target.value))} 
          />
        </div>
        <div className="space-y-2 flex items-end pb-2">
          <Label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
              checked={formData.featured}
              onChange={(e) => updateField('featured', e.target.checked)}
            />
            <span>Featured on Homepage</span>
          </Label>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">Client Avatar URL</Label>
        <Input 
          id="imageUrl" 
          value={formData.imageUrl} 
          onChange={(e) => updateField('imageUrl', e.target.value)} 
          placeholder="https://example.com/avatar.jpg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="review">Review Content</Label>
        <Textarea 
          id="review" 
          value={formData.review} 
          onChange={(e) => updateField('review', e.target.value)} 
          className="min-h-[100px]"
          required
        />
      </div>
    </>
  );

  return (
    <CrudTable
      title="Client Reviews"
      collectionName="reviews"
      columns={columns}
      defaultValues={defaultValues}
      renderForm={renderForm}
    />
  );
}
