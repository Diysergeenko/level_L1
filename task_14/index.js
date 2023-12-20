// Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис,
// который разрешается с данными об изображении, когда оно загружено. Когда говорится
// "промис разрешается с данными об изображении", это означает, что промис должен быть
// успешно выполнен (resolved) с данными об изображении после того, как изображение будет
// загружено.

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
        url: url,
      });
    };

    img.onerror = () => {
      reject(new Error("Не удалось загрузить изображение"));
    };

    img.src = url;
  });
}
const imageUrl = "https://klike.net/uploads/posts/2019-11/1574605256_5.jpg";

loadImage(imageUrl)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
