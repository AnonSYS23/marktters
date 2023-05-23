const hueSlider = document.querySelector('.hue-slider');
const saturation = document.querySelector('.saturation');
const value = document.querySelector('.value');

hueSlider.addEventListener('input', function() {
  let hue = hueSlider.value;
  saturation.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  value.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
});
