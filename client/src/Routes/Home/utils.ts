import cloud from '../../assets/images/nublado.jpg'
import rain from '../../assets/images/lluvioso.jpg'
import thunderstorm from '../../assets/images/tormenta.jpg'
import snow from '../../assets/images/nieve.jpg'
import sun from '../../assets/images/soleado.jpg'
import mist from '../../assets/images/mist.jpeg'
import moon from '../../assets/images/moon.jpg'


export const getIconClass = (icon: string) => {
  switch (icon) {
    case "01d":
      return sun;
    case "01n":
      return moon;
    case "02d":
    case "02n":
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return cloud;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      return rain;
    case "11d":
    case "11n":
      return thunderstorm;
    case "13d":
    case "13n":
      return snow;
    case "50d":
    case "50n":
      return mist;
    default:
      return "moon";
  }
};

export const debounce = (func: Function, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
