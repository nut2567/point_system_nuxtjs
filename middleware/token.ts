import Swal from 'sweetalert2';
import { useMyStore } from '~/stores';

type ApiError = {
  statusCode?: number;
};

export default defineNuxtRouteMiddleware(async () => {
  const tokenCookie = useCookie<string | null>('token');
  const token = tokenCookie.value;

  const redirectToLogin = (text: string) => {
    if (import.meta.client) {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: text,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    tokenCookie.value = null;
    return navigateTo('/');
  };

  if (!token) {
    return redirectToLogin('not have permission');
  }

  const store = useMyStore();
  const { data } = await store.fetchUserProfile();
  const statusCode = (data as ApiError | undefined)?.statusCode;

  if (statusCode === 403 || statusCode === 401) {
    return redirectToLogin('Token expired!');
  }
});
