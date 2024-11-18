import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '@web/pages';

function AuthNavigator() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default AuthNavigator;
