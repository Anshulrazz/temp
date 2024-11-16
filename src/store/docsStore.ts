import { create } from 'zustand';
import api from '../lib/axios';
import { toast } from 'react-hot-toast';

interface Document {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  file: string;
  likes: number;
  isLiked: boolean;
  author: {
    id: string;
    name: string;
  };
}

interface DocumentState {
  documents: Document[];
  isLoading: boolean;
  publishDocument: (data: FormData) => Promise<void>;
  deleteDocument: (id: string) => Promise<void>;
  toggleLike: (id: string) => Promise<void>;
  fetchDocuments: () => Promise<void>;
}

const useDocumentStore = create<DocumentState>((set, get) => ({
  documents: [],
  isLoading: false,

  publishDocument: async (formData: FormData) => {
    try {
      set({ isLoading: true });
      await api.post('/docs/publish', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Document published successfully');
      await get().fetchDocuments();
    } catch (error) {
      toast.error('Document publication failed');
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  deleteDocument: async (id: string) => {
    try {
      await api.delete(`/docs/delete/${id}`);
      set((state) => ({
        documents: state.documents.filter((doc) => doc.id !== id),
      }));
      toast.success('Document deleted successfully');
    } catch (error) {
      toast.error('Failed to delete document');
      throw error;
    }
  },

  toggleLike: async (id: string) => {
    try {
      await api.put(`/docs/likeunlike/${id}`);
      set((state) => ({
        documents: state.documents.map((doc) =>
          doc.id === id
            ? {
                ...doc,
                likes: doc.isLiked ? doc.likes - 1 : doc.likes + 1,
                isLiked: !doc.isLiked,
              }
            : doc
        ),
      }));
    } catch (error) {
      toast.error('Failed to update like');
      throw error;
    }
  },

  fetchDocuments: async () => {
    try {
      set({ isLoading: true });
      const { data } = await api.get('/docs');
      set({ documents: data.documents });
    } catch (error) {
      toast.error('Failed to fetch documents');
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useDocumentStore;