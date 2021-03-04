import { printPassword, printPasswordSet } from "./messages";
import { askForPasswordValue } from "./questions";

export const hasAccess = (masterPassword: string): boolean =>
  masterPassword === "666";

export const handleSetPassword = async (
  passwordName: string
): Promise<void> => {
  const passwordValue = await askForPasswordValue();
  // ToDO use response.passwordValue to update password
  printPasswordSet(passwordName);
};

export const handleGetPassword = async (
  passwordName: string
): Promise<void> => {
  printPassword(passwordName, "adc666");
};
