export function handleShowHideClick() {
  const self = this;

  if (self.showing) {
    self.list.className += ' hidden';
    self.showing = false;
  } else {
    self.list.className = self.list.className.replace(/\hidden\b/,'');
    self.showing = true;
  }
}
