export function useClamp(
  value: number,
  min: number,
  max: number,
  name = "value"
) {
  if (import.meta.env.DEV) {
    if (value < min || value > max) {
      console.warn(
        `[${name}] debe estar entre ${min} y ${max}. Valor recibido: ${value}`
      );
    }
  }

  return Math.min(max, Math.max(min, value));
}
