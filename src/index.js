import classes from './classes';

export default {
  install(app) {
    classes.BASES.forEach((element) => {
      app.directive(element, (el, binding) => {
        let className = element;
        if (element === 'preform') {
          className = 'pre';
        }
        if (binding.value || binding.value === 0) {
          className = `${className}${binding.value}`;
        }
        if (binding.arg) {
          className = `${className}--${binding.arg}`;
        }
        if (binding.modifiers) {
          Object.keys(binding.modifiers).forEach((modifier) => {
            className = `${className}-${modifier}`;
          });
        }
        el.classList.add(className);
      });
    });
  },
};
