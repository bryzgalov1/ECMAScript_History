
// Экспорт переменной
export const API_URL = "https://api.example.com";

// Экспорт функции
export function fetchData() {
  return "Data";
}

// Экспорт по умолчанию
export default class ApiClient {
  get() { return "GET"; }
}

/*
// Импорт (в другом файле)
import ApiClient, { API_URL, fetchData } from './modules';
*/
