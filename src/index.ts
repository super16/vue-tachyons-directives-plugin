import { App, Plugin } from 'vue';

import CLASS_NAMES from './classNames';

const VueTachyonsPlugin: Plugin = {
  install(app: App) {
    CLASS_NAMES.forEach((element: string) => {
      app.directive(element, (el, binding) => {
        let className: string = element;
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

export default VueTachyonsPlugin;
