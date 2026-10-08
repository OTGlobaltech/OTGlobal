"use client";

import CrudTable from './CrudTable';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function AdminFAQs() {
  const columns = [
    { key: 'question', label: 'Question' },
    { key: 'category', label: 'Category' },
    { 
      key: 'isActive', 
      label: 'Active',
      render: (row) => row.isActive ? 'Yes' : 'No'
    }
  ];

  const defaultValues = {
    question: '',
    answer: '',
    category: 'General',
    isActive: true,
    order: 0
  };

  const renderForm = ({ formData, updateField }) => (
    <>
      <div className="space-y-2">
        <Label htmlFor="question">Question</Label>
        <Input 
          id="question" 
          value={formData.question} 
          onChange={(e) => updateField('question', e.target.value)} 
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Input 
            id="category" 
            value={formData.category} 
            onChange={(e) => updateField('category', e.target.value)} 
            placeholder="e.g. Services, Pricing"
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

      <div className="space-y-2 flex items-end pb-2 pt-2">
        <Label className="flex items-center space-x-2 cursor-pointer">
          <input 
            type="checkbox" 
            className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
            checked={formData.isActive}
            onChange={(e) => updateField('isActive', e.target.checked)}
          />
          <span>Visible on Website</span>
        </Label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="answer">Answer</Label>
        <Textarea 
          id="answer" 
          value={formData.answer} 
          onChange={(e) => updateField('answer', e.target.value)} 
          className="min-h-[100px]"
          required
        />
      </div>
    </>
  );

  return (
    <CrudTable
      title="FAQs"
      collectionName="faqs"
      columns={columns}
      defaultValues={defaultValues}
      renderForm={renderForm}
    />
  );
}
