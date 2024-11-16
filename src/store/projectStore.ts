import { create } from 'zustand';
import api from '../lib/axios';
import { toast } from 'react-hot-toast';

interface Project {
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

interface ProjectState {
  projects: Project[];
  isLoading: boolean;
  uploadProject: (data: FormData) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  toggleLike: (id: string) => Promise<void>;
  fetchProjects: () => Promise<void>;
}

const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  isLoading: false,

  uploadProject: async (formData: FormData) => {
    try {
      set({ isLoading: true });
      await api.post('/project/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Project uploaded successfully');
      await get().fetchProjects();
    } catch (error) {
      toast.error('Project upload failed');
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  deleteProject: async (id: string) => {
    try {
      await api.delete(`/project/delete/${id}`);
      set((state) => ({
        projects: state.projects.filter((project) => project.id !== id),
      }));
      toast.success('Project deleted successfully');
    } catch (error) {
      toast.error('Failed to delete project');
      throw error;
    }
  },

  toggleLike: async (id: string) => {
    try {
      await api.put(`/project/likeunlike/${id}`);
      set((state) => ({
        projects: state.projects.map((project) =>
          project.id === id
            ? {
                ...project,
                likes: project.isLiked ? project.likes - 1 : project.likes + 1,
                isLiked: !project.isLiked,
              }
            : project
        ),
      }));
    } catch (error) {
      toast.error('Failed to update like');
      throw error;
    }
  },

  fetchProjects: async () => {
    try {
      set({ isLoading: true });
      const { data } = await api.get('/project');
      set({ projects: data.projects });
    } catch (error) {
      toast.error('Failed to fetch projects');
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProjectStore;