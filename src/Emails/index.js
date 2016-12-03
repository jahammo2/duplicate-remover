import EmailDuplicateRemover from './EmailDuplicateRemover';
import {
  find,
  generateEmails
} from '../../utils';
import { handleShowHideClick } from '../../utils/dom';

class Emails {
  constructor() {
    this.handleShowHideClick = handleShowHideClick.bind(this);
    this.generatorButton = find('generatorButton');
    this.list = find('initialEmails');
    this.showHideButton = find('showHideInitialEmailsButton');
  }

  handleGenerateClick() {
    const self = this;

    self.showHideButton.className = self.showHideButton.className.replace(/\invisible\b/,'');
    const promise = new Promise((resolve, reject) => resolve(generateEmails()));

    promise.then((emails) => {
      self.list.innerHTML = emails.join(', ');
      new EmailDuplicateRemover(emails).render();
    });
  }

  registerEvents() {
    const self = this;

    self.generatorButton.addEventListener('click', self.handleGenerateClick.bind(self));
    self.showHideButton.addEventListener('click', self.handleShowHideClick.bind(self));
  }
}

export default Emails;
