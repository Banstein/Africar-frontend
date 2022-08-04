import { useState } from 'react';
import AuthModal from './AuthModal';
import PrimaryButton from './PrimaryButton';

const SplashScreen = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openAuthModal = (isLogin = true) => {
    if (isLogin) {
      setIsLoginModalOpen(true);
      setIsSignUpModalOpen(false);
    } else {
      setIsLoginModalOpen(false);
      setIsSignUpModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(false);
  };

  return (
    <section className='flex flex-col items-center justify-center w-full min-h-screen gap-12 py-10 text-white splash-screen'>
      <h1 className='text-4xl font-bold text-center md:text-5xl lg:text-7xl'>
        BOOK YOUR PREMIUM CAR
        <span className='block'>EASILY</span>
      </h1>
      {isLoginModalOpen && <AuthModal closeModal={closeModal} />}
      {isSignUpModalOpen && (
        <AuthModal isLogin={false} closeModal={closeModal} />
      )}
      {!(isLoginModalOpen || isSignUpModalOpen) && (
        <>
          <PrimaryButton onClick={openAuthModal}>Sign In</PrimaryButton>
          <button
            className='-mt-4 font-bold uppercase hover:opacity-60'
            type='button'
            onClick={openAuthModal.bind(this, false)}
          >
            Sign up
          </button>
        </>
      )}
    </section>
  );
};
export default SplashScreen;
