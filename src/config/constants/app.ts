export const APP_ID = 51628969;
export const APP_URL = `https://vk.com/app${APP_ID}`;
export const GROUP_ID = "";
export const NAME_PROJECT = "Portfolio";
export const APP_AVATAR = "";
export const ROUTE_URL =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";
export const ADMINS = [769019442];
export const SHARING_TEXT = `
Узнай последние новости!
💥Всё это доступно в нашем приложении - ${APP_URL}`;

// получение ID пользователя который зашел в приложение
export const USER_ID = Number(
  new URLSearchParams(document.location.search).get("vk_user_id")
);
export const vkValidationParams = globalThis.location.search;
