const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    if (file.type.match(/image.*/)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    } else resolve("Not a valid file type");
  });

export default toBase64;
