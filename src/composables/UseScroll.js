import { ref } from "vue";

export function useScroll() {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    scrollToElement,
  };
}
