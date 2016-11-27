class Home {
  constructor() {
    this.tasks = ['foo', 'bar', 'abz'];
  }

  renderTasks() {
    return this.tasks.map((task) => {
      return `<li>${task}</li>`;
    }).join('');
  }

  render() {
    return `
      <ul>${this.renderTasks()}</ul>
    `;
  }
}

export default Home;
