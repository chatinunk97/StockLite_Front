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
  denyText =  "Cancel",
  bodyText = ""
) => {
  return Swal.fire({
    heightAuto: false,
    title,
    text : bodyText,
    showDenyButton: true,
    showCancelButton: isShowCancel,
    confirmButtonText: confirmText,
    denyButtonText: denyText,

  });
};

export const AlertNotiSuc = (type,title,message) => {
  Swal.fire(title, message, type);
};
