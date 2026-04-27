import { useMyStore } from '~/stores';

export default defineNuxtRouteMiddleware(async () => {
  const token = useCookie<string | null>('token').value;

  if (!token) {
    return;
  }

  const store = useMyStore();
  const decodedToken = await store.fetchUserProfile();

  if (decodedToken?.data && !('statusCode' in decodedToken.data)) {
    return navigateTo('/home');
  }
});
