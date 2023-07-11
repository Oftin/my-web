import { ToastModified } from "./styled";

interface ToastProps {
  toastType: "success" | "fail";
}

export const Toast = ({ toastType }: ToastProps) => {
  return <ToastModified position="bottom-right" backgroundColor={toastType} />;
};
