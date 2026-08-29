function showToast(message,type) {
    const toast = document.createElement("div");
    toast.classList.add("toast", type);
    toast.textContent = message;
    const toastContainer = document.getElementById("toast-container");
    toastContainer.appendChild(toast); 
    setTimeout(() => {
        toast.remove();
    },4000);
}