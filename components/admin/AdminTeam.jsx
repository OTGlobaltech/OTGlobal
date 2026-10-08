"use client";

import CrudTable from './CrudTable';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function AdminTeam() {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role / Designation' },
    { 
      key: 'order', 
      label: 'Sort Order'
    }
  ];

  const defaultValues = {
    name: '',
    role: '',
    bio: '',
    imageUrl: '',
    linkedinUrl: '',
    twitterUrl: '',
    order: 0
  };

  const renderForm = ({ formData, updateField }) => (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            value={formData.name} 
            onChange={(e) => updateField('name', e.target.value)} 
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role / Designation</Label>
          <Input 
            id="role" 
            value={formData.role} 
            onChange={(e) => updateField('role', e.target.value)} 
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
          <Input 
            id="linkedinUrl" 
            value={formData.linkedinUrl} 
            onChange={(e) => updateField('linkedinUrl', e.target.value)} 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="twitterUrl">Twitter URL</Label>
          <Input 
            id="twitterUrl" 
            value={formData.twitterUrl} 
            onChange={(e) => updateField('twitterUrl', e.target.value)} 
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="imageUrl">Profile Image URL</Label>
          <Input 
            id="imageUrl" 
            value={formData.imageUrl} 
            onChange={(e) => updateField('imageUrl', e.target.value)} 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="order">Sort Order</Label>
          <Input 
            id="order" 
            type="number"
            value={formData.order} 
            onChange={(e) => updateField('order', parseInt(e.target.value))} 
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Short Bio</Label>
        <Textarea 
          id="bio" 
          value={formData.bio} 
          onChange={(e) => updateField('bio', e.target.value)} 
          className="min-h-[100px]"
        />
      </div>
    </>
  );

  return (
    <CrudTable
      title="Team Members"
      collectionName="team"
      columns={columns}
      defaultValues={defaultValues}
      renderForm={renderForm}
    />
  );
}
