import { ref } from 'vue';
import { baseApi } from './base';

const useComposableData = () => {
  // const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const fetchData = async (url, method = 'GET') => {
    loading.value = true;
    try {
      const response = await baseApi.request({
        url,
        method
      });
      return response.data.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return { error, loading, fetchData };
};

export default useComposableData;