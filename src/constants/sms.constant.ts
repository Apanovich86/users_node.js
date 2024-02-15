import { EEmailAction } from "../enums/email-action.enum";

export const smsTemplates = {
  [EEmailAction.WELCOME]: (context: {name: string}) =>
      `Hey ${context.name}! Happy to see you in our app !!!👋`,
};
