import { createSharedComposable } from "@vueuse/core";
import { onUnmounted, ref } from "vue";

export function useWindowSize() {
  const width = ref(window.innerWidth);

  const updateWindowSize = () => {
    width.value = window.innerWidth;
  }

  window.addEventListener('resize', updateWindowSize, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowSize);
  })

  return {
    width
  }
}

export const useWindowSizeShared = createSharedComposable(useWindowSize);