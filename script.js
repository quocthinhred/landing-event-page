const params = (new URL(document.location)).searchParams;
const myStatus = params.get("status");

const successTag = document.querySelector(".verify-tag-success");
const errorTag = document.querySelector(".verify-tag-error");
const serialQr = document.querySelector(".serial-qr");

if (myStatus === "ERROR") {
    successTag.classList.add("display-none");
    errorTag.classList.remove("display-none");
    serialQr.classList.add("display-none");
}