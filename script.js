onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    document.querySelector('.image-container').style.display = 'flex'; // Hiện hình ảnh
    clearTimeout(c);
  }, 1000);
};
