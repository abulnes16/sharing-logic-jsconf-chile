import React from 'react';
import { Button, Header, Loader, Screen } from '@mobile/components';
import { Localization, useAuth } from '@e-commerce-sharling-logic/ui';

const Profile = () => {
  const { isLoading, logout } = useAuth();

  return (
    <Screen>
      <Header title={Localization.home.myProfile} />
      {isLoading ? (
        <Loader />
      ) : (
        <Button title={Localization.auth.logout} onPress={logout} />
      )}
    </Screen>
  );
};

export default Profile;
