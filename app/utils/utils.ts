export const removeAccent = (value: string) => {
  return value
    .normalize("NFD") // Descompone los caracteres combinados en la forma canónica
    .replace(/[\u0301]/g, "") // Elimina solo el acento agudo (tilde)
    .normalize("NFC"); // Reconstruye los caracteres descompuestos
};
export const dayOfWeek = (day: number) => {
  const allDays = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  if (day == undefined) return "-99";
  return allDays[day];
};
export const placeIs = (place: string) => {
  const splitValues = place.split(".");
  if (splitValues.length <= 2) return place;
};
