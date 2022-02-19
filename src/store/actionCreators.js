import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from "./constants";

// Экшн-криэйторы для изменения имени и фамилии, создают объекты действия
export const changeFirstName = (firstName) => {
    return {
      type: ACTION_CHANGE_FIRST_NAME,
      payload: firstName,
    }
  }

export const changeSecondName = (secondName) => {
    return {
      type: ACTION_CHANGE_SECOND_NAME,
      payload: secondName,
    }
  }