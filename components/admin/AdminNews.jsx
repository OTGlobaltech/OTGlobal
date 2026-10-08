"use client";

import CrudTable from './CrudTable';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function AdminNews() {
  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author' },
    { key: 'date', label: 'Publish Date' },
    { 
      key: 'status', 
      label: 'Status',
      render: (row) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {row.status || 'draft'}
        </span>
      )
    }
  ];

  const defaultValues = {
    title: '',
    author: '',
    date: '',
    content: '',
    imageUrl: '',
    status: 'draft'
  };

  const renderForm = ({ formData, updateField }) => (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Article Title</Label>
          <Input 
            id="title" 
            value={formData.title} 
            onChange={(e) => updateField('title', e.target.value)} 
            placeholder="e.g. New AI Features Released" 
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="author">Author</Label>
          <Input 
            id="author" 
            value={formData.author} 
            onChange={(e) => updateField('author', e.target.value)} 
            placeholder="e.g. John Doe"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">Publish Date</Label>
          <Input 
            id="date" 
            type="date"
            value={formData.date} 
            onChange={(e) => updateField('date', e.target.value)} 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <select 
            id="status"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={formData.status}
            onChange={(e) => updateField('status', e.target.value)}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">Cover Image URL</Label>
        <Input 
          id="imageUrl" 
          value={formData.imageUrl} 
          onChange={(e) => updateField('imageUrl', e.target.value)} 
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content (Markdown / Text)</Label>
        <Textarea 
          id="content" 
          value={formData.content} 
          onChange={(e) => updateField('content', e.target.value)} 
          placeholder="Write your article content here..."
          className="min-h-[150px]"
          required
        />
      </div>
    </>
  );

  return (
    <CrudTable
      title="News & Articles"
      collectionName="news"
      columns={columns}
      defaultValues={defaultValues}
      renderForm={renderForm}
    />
  );
}
