class Logger {
  constructor(spaces, text, color) {
    this.color = color;
    this.spaces = spaces;
    this.text = text;
  }

  createSentence() {
    return `${' '.repeat(this.spaces)}${this.text}`;
  }

  run() {
    console.log(this.color, this.createSentence());
  }
}

export default Logger;
