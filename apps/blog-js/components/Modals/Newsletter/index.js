import { useState } from 'react';
import { useLocalStorage } from 'react-use';
import Modal from '../../Modal';
import Headline from '../../Headline';
import { usePageLeave } from 'react-use';

const NewsletterModal = () => {
  const timeout = 60 * 60 * 60 * 24 * 3; // 3 days
  const [newsletterModalShowTimestamp, setNewsletterModalShowTimestamp] =
    useLocalStorage('newsletter-modal-show-timestamp');
  const [isOpen, setIsOpen] = useState(false);

  usePageLeave(() => {
    const currentTimestamp = Date.now();
    if (
      !newsletterModalShowTimestamp ||
      currentTimestamp > newsletterModalShowTimestamp + timeout
    ) {
      setNewsletterModalShowTimestamp(currentTimestamp);
      setIsOpen(true);
    }
  }, [newsletterModalShowTimestamp]);

  return (
    <Modal
      isOpen={isOpen}
      preventScroll
      onRequestClose={() => setIsOpen(false)}
    >
      <Modal.Inner>
        <Headline>Sign up for newsletter</Headline>
        Email:
        <input type="email" placeholder="example@dev.com" />
      </Modal.Inner>
    </Modal>
  );
};

export default NewsletterModal;
