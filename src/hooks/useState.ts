let hooks = [];
let currentHookIndex = 0;
let rerenderCallback = null;

export function setRerenderCallback(callback) {
  rerenderCallback = callback;
}

export function resetHooks() {
  currentHookIndex = 0;
}

export function useState(initialValue) {
  const index = currentHookIndex;

  if (hooks[index] === undefined) {
    hooks[index] = initialValue;
  }

  const setState = (newState) => {
    hooks[index] = newState;

    setTimeout(() => {
      rerenderCallback?.();
    }, 0);
  };

  currentHookIndex++;

  return [hooks[index], setState];
}
