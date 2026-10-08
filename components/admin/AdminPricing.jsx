"use client";

import CrudTable from './CrudTable';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function AdminPricing() {
  const columns = [
    { key: 'planName', label: 'Plan Name' },
    { key: 'price', label: 'Price' },
    { key: 'billingCycle', label: 'Billing Cycle' },
    { 
      key: 'isPopular', 
      label: 'Highlighted',
      render: (row) => row.isPopular ? 'Yes' : 'No'
    }
  ];

  const defaultValues = {
    planName: '',
    price: '',
    billingCycle: '/month',
    description: '',
    features: '',
    isPopular: false,
    buttonText: 'Get Started',
    buttonLink: '/contact'
  };

  const renderForm = ({ formData, updateField }) => (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="planName">Plan Name</Label>
          <Input 
            id="planName" 
            value={formData.planName} 
            onChange={(e) => updateField('planName', e.target.value)} 
            placeholder="e.g. Basic, Pro"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price (String)</Label>
          <Input 
            id="price" 
            value={formData.price} 
            onChange={(e) => updateField('price', e.target.value)} 
            placeholder="e.g. $499 or Custom"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="billingCycle">Billing Cycle</Label>
          <Input 
            id="billingCycle" 
            value={formData.billingCycle} 
            onChange={(e) => updateField('billingCycle', e.target.value)} 
            placeholder="e.g. /month"
          />
        </div>
        <div className="space-y-2 flex items-end pb-2">
          <Label className="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
              checked={formData.isPopular}
              onChange={(e) => updateField('isPopular', e.target.checked)}
            />
            <span>Highlight as "Most Popular"</span>
          </Label>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Short Description</Label>
        <Input 
          id="description" 
          value={formData.description} 
          onChange={(e) => updateField('description', e.target.value)} 
          placeholder="Perfect for small businesses."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="buttonText">Button Text</Label>
          <Input 
            id="buttonText" 
            value={formData.buttonText} 
            onChange={(e) => updateField('buttonText', e.target.value)} 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="buttonLink">Button Link</Label>
          <Input 
            id="buttonLink" 
            value={formData.buttonLink} 
            onChange={(e) => updateField('buttonLink', e.target.value)} 
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="features">Features (One per line)</Label>
        <Textarea 
          id="features" 
          value={formData.features} 
          onChange={(e) => updateField('features', e.target.value)} 
          placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
          className="min-h-[150px]"
          required
        />
      </div>
    </>
  );

  return (
    <CrudTable
      title="Pricing Plans"
      collectionName="pricing"
      columns={columns}
      defaultValues={defaultValues}
      renderForm={renderForm}
    />
  );
}
