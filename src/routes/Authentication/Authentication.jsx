import SignUpForm from '../../components/SignUp/SignUp';
import SignInForm from '../../components/SignIn/SignIn';

import './Authentication.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;