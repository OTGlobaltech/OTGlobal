"use client";

import { useState, useEffect } from 'react';
import { firestoreService } from '@/lib/firestoreService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Edit2, Trash2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function CrudTable({ 
  title, 
  collectionName, 
  columns, 
  formFields, 
  renderForm,
  defaultValues = {}
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState(defaultValues);
  const [editingId, setEditingId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchData();
  }, [collectionName]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const docs = await firestoreService.getAll(collectionName);
      setData(docs);
    } catch (error) {
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenDialog = (item = null) => {
    if (item) {
      setEditingId(item.id);
      setFormData(item);
    } else {
      setEditingId(null);
      setFormData(defaultValues);
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (editingId) {
        await firestoreService.update(collectionName, editingId, formData);
        toast.success(`${title} updated successfully`);
      } else {
        await firestoreService.add(collectionName, formData);
        toast.success(`${title} added successfully`);
      }
      setIsDialogOpen(false);
      fetchData(); // Refresh data
    } catch (error) {
      toast.error(`Failed to save ${title.toLowerCase()}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await firestoreService.delete(collectionName, id);
        toast.success(`${title} deleted successfully`);
        fetchData(); // Refresh data
      } catch (error) {
        toast.error(`Failed to delete ${title.toLowerCase()}`);
      }
    }
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Manage {title}</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleOpenDialog()}>
              <Plus className="w-4 h-4 mr-2" /> Add New
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingId ? 'Edit' : 'Add'} {title}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              {renderForm({ formData, updateField })}
              <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Save'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
        {loading ? (
          <div className="p-8 flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : data.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No data found. Click "Add New" to create one.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900/50 dark:text-gray-400">
                <tr>
                  {columns.map((col, idx) => (
                    <th key={idx} className="px-6 py-4 font-medium">{col.label}</th>
                  ))}
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    {columns.map((col, idx) => (
                      <td key={idx} className="px-6 py-4">
                        {col.render ? col.render(row) : row[col.key]}
                      </td>
                    ))}
                    <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                      <Button variant="outline" size="sm" onClick={() => handleOpenDialog(row)}>
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="destructive" size="sm" onClick={() => handleDelete(row.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
