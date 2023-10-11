import Swal from "sweetalert2";

export const AlertOK = (message) =>
  Swal.fire("Login Success", `Welcome back , ${message}`, "success");

export const AlertNG = (message) => {
  return Swal.fire("Login Failed", `${message}`, "error");
};

export const Alert3Choice = (
  title = "title",
  isShowCancel = false,
  confirmText = "Confirm",
  denyText = "Cancel"
) => {
  return Swal.fire({
    heightAuto: false,
    title,
    showDenyButton: true,
    showCancelButton: isShowCancel,
    confirmButtonText: confirmText,
    denyButtonText: denyText,
  });
};
