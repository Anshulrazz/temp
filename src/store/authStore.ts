import { create } from 'zustand';
import api from '../lib/axios'; // Assume axios is properly set up
import { toast } from 'react-hot-toast';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  branch: string;
  bio?: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: UpdateProfileData) => Promise<void>;
  getProfile: () => Promise<void>;
}

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  branch: string;
  password: string;
}

interface UpdateProfileData {
  name?: string;
  phone?: string;
  branch?: string;
  bio?: string;
  avatar?: string;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,

  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true });
      const { data } = await api.post('/auth/login', { email, password });
      set({ user: data.user });
      toast.success('Logged in successfully');
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Invalid credentials');
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (registerData: RegisterData) => {
    try {
      set({ isLoading: true });
      const { data } = await api.post('/auth/register', registerData);
      set({ user: data.user });
      toast.success('Registration successful');
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Registration failed');
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      await api.get('/auth/logout');
      set({ user: null });
      toast.success('Logged out successfully');
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Logout failed');
      throw error;
    }
  },

  updateProfile: async (updateData: UpdateProfileData) => {
    try {
      set({ isLoading: true });
      const { data } = await api.post('/auth/updateProfile', updateData);
      set({ user: data.user });
      toast.success('Profile updated successfully');
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Profile update failed');
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  getProfile: async () => {
    try {
      set({ isLoading: true });
      const { data } = await api.get('/auth/me');
      set({ user: data.user });
    } catch (error) {
      set({ user: null });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuthStore;
