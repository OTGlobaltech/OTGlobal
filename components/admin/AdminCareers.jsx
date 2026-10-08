"use client";

import CrudTable from './CrudTable';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function AdminCareers() {
  const columns = [
    { key: 'title', label: 'Job Title' },
    { key: 'department', label: 'Department' },
    { key: 'location', label: 'Location' },
    { key: 'type', label: 'Job Type' },
    { 
      key: 'status', 
      label: 'Status',
      render: (row) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {row.status || 'closed'}
        </span>
      )
    }
  ];

  const defaultValues = {
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    description: '',
    requirements: '',
    status: 'open'
  };

  const renderForm = ({ formData, updateField }) => (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Job Title</Label>
          <Input 
            id="title" 
            value={formData.title} 
            onChange={(e) => updateField('title', e.target.value)} 
            placeholder="e.g. Senior Frontend Developer" 
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Input 
            id="department" 
            value={formData.department} 
            onChange={(e) => updateField('department', e.target.value)} 
            placeholder="e.g. Engineering"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input 
            id="location" 
            value={formData.location} 
            onChange={(e) => updateField('location', e.target.value)} 
            placeholder="e.g. Remote"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="type">Job Type</Label>
          <select 
            id="type"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={formData.type}
            onChange={(e) => updateField('type', e.target.value)}
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <select 
            id="status"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={formData.status}
            onChange={(e) => updateField('status', e.target.value)}
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Job Description</Label>
        <Textarea 
          id="description" 
          value={formData.description} 
          onChange={(e) => updateField('description', e.target.value)} 
          placeholder="Brief overview of the role..."
          className="min-h-[100px]"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="requirements">Requirements (Bullet points)</Label>
        <Textarea 
          id="requirements" 
          value={formData.requirements} 
          onChange={(e) => updateField('requirements', e.target.value)} 
          placeholder="- React.js experience&#10;- TypeScript knowledge..."
          className="min-h-[100px]"
        />
      </div>
    </>
  );

  return (
    <CrudTable
      title="Careers & Jobs"
      collectionName="careers"
      columns={columns}
      defaultValues={defaultValues}
      renderForm={renderForm}
    />
  );
}
