import {
  find,
  getTime
} from '../../../utils';
import { handleShowHideClick } from '../../../utils/dom';

class EmailDuplicateRemover {
  constructor(emails) {
    this.handleShowHideClick = handleShowHideClick.bind(this);
    this.originalEmailsList = emails;

    this.duplicateRemoverButton = find('duplicateRemoverButton');
    this.list = find('removedDuplicatesList');
    this.showHideButton = find('showHideRemovedDuplicatesButton');
    this.totalTimeSentence = find('totalTimeSentence');
  }

  fillHtml(emails, totalTime) {
    this.list.innerHTML = emails.join(', ');
    this.totalTimeSentence.innerHTML = `Duplicate removal completed in ${totalTime} milliseconds`;
  }

  handleDuplicateRemoverClick() {
    // when `this` has to be called a bunch of times, I'll go ahead and assign it to a variable
    const self = this;

    self.showHideButton.className = self.showHideButton.className.replace(/\invisible\b/,'');
    const t0 = getTime();
    const promise = new Promise((resolve, reject) => resolve(self.removeDuplicates()));

    promise.then((emails) => {
      const t1 = getTime();
      const totalTime = t1 - t0;
      self.fillHtml(emails, totalTime);
    });
  }

  // This should probably be handled as a util but I'll keep it in this class for now
  removeDuplicates() {
    let emailHash = {};
    const emails = this.originalEmailsList;
    const newEmailList = [];

    for (let i = 0;i < emails.length;i++) {
      if (!emailHash[emails[i]]) {
        emailHash[emails[i]] = emails[i];
        newEmailList.push(emails[i]);
      }
    }

    return newEmailList;
  }

  render() {
    const self = this;

    self.duplicateRemoverButton.className = self.duplicateRemoverButton.className.replace(/\invisible\b/,'');
    self.duplicateRemoverButton.addEventListener('click', self.handleDuplicateRemoverClick.bind(self));
    self.showHideButton.addEventListener('click', self.handleShowHideClick.bind(self));
  }
}

export default EmailDuplicateRemover;
