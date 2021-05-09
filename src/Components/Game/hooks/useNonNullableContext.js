import { Context, useContext } from "react";

export const useNonNullableContext = (
  providedContext: Context<T | undefined>
) => {
  const context = useContext(providedContext);
  if (context === undefined) {
    throw new Error("context must be used within a Provider");
  }
  return context;
};
