import { defineStore } from 'pinia';

type JwtPayload = {
  userInfo?: Record<string, unknown>;
};

type ApiError = {
  statusCode?: number;
  statusMessage?: string;
  message?: string;
};

export const useMyStore = defineStore('myStore', {
  state: () => ({
    userinfo: {} as Record<string, unknown>,
    points: 0,
    rewards: [] as unknown[],
    token: null as string | null,
    apiData: [] as unknown[],
    idProduct: null as number | null,
  }),
  actions: {
    async getUserLocal(token = useCookie<string | null>('token').value) {
      function base64UrlDecode(str: string) {
        return decodeURIComponent(
          atob(str.replace(/-/g, '+').replace(/_/g, '/'))
            .split('')
            .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
            .join(''),
        );
      }

      if (!token) {
        console.error('Token is missing');
        return;
      }

      const parts = token.split('.');
      if (parts.length !== 3) {
        console.error('Invalid token format');
        return;
      }

      const decodedPayload = base64UrlDecode(parts[1]);
      const userData = JSON.parse(decodedPayload) as JwtPayload;
      this.userinfo = userData.userInfo ?? {};
    },
    async fetchUserProfile(token = useCookie<string | null>('token').value) {
      try {
        const { data, error } = await useFetch<{ user: Record<string, unknown> }>('/api/profile', {
          method: 'get',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (error.value) {
          console.error('Error fetching user profile:', error);
          return { data: error.value.data as ApiError };
        }

        this.userinfo = data.value?.user ?? {};
        return { data: this.userinfo };
      } catch (error) {
        return { data: error as ApiError };
      }
    },
  },
});
