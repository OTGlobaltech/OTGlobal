import { db } from './firebase';
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';

// Generic service to handle all Firestore collections (News, Careers, Reviews, etc.)
export const firestoreService = {
  // Get all documents in a collection (optionally ordered by a field)
  getAll: async (collectionName, orderByField = 'createdAt', orderDir = 'desc') => {
    try {
      const q = query(collection(db, collectionName), orderBy(orderByField, orderDir));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error(`Error fetching ${collectionName}:`, error);
      throw error;
    }
  },

  // Get a single document by ID
  getById: async (collectionName, id) => {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      }
      return null;
    } catch (error) {
      console.error(`Error fetching document ${id} from ${collectionName}:`, error);
      throw error;
    }
  },

  // Add a new document
  add: async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return docRef.id;
    } catch (error) {
      console.error(`Error adding to ${collectionName}:`, error);
      throw error;
    }
  },

  // Update an existing document
  update: async (collectionName, id, data) => {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: serverTimestamp()
      });
      return true;
    } catch (error) {
      console.error(`Error updating document ${id} in ${collectionName}:`, error);
      throw error;
    }
  },

  // Delete a document
  delete: async (collectionName, id) => {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
      return true;
    } catch (error) {
      console.error(`Error deleting document ${id} in ${collectionName}:`, error);
      throw error;
    }
  }
};
