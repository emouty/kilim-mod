function toRadian(angle) {
  return angle * Math.PI / 180.0;
};

function convertCanvasToImage(canvas) {
  var image = document.createElement('img');
  image.src = canvas.toDataURL();
  image.style = canvas.style;
  canvas.parentElement.replaceChild(image, canvas);
  return image;
}

function resizeCanvas(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

}
