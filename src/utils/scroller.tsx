// utils.ts
export function handleSmoothScroll(element: string) {
  const targetElement = document.getElementById(element);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
