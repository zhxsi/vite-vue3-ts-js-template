import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore(
  "main",
  () => {
    const count = ref(0);
    const cachedViews = ref([]);
    const addCacheRoute = <T>(name: T) => {
      cachedViews.value.push(name);
      cachedViews.value = Array.from(new Set(cachedViews.value));
    };
    const clearCacheRoute = (name: string) => {
      cachedViews.value = [name];
    };
    const { locale } = useI18n();
    // 切换语言
    const changeLanguage = (lang: string) => {
      locale.value = lang;
      localStorage.setItem('lang', lang);
    }
    return {
      cachedViews,
      addCacheRoute,
      clearCacheRoute,
      count,
      changeLanguage
    } as const;
  },
  {
    persist: true,
  },
);
