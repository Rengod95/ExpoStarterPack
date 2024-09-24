import {observer} from 'mobx-react-lite';
import {Redirect, Stack} from 'expo-router';
import {useGlobalStore} from '@/app/View/Store/hooks/useGlobalStore.ts';
import {AuthService} from '@/Service/lib/Auth/Adapter.ts';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const RootMainLayout = observer(() => {
  const AuthStore = useGlobalStore('AuthStore');

  if (!AuthStore.isSessionValid && AuthService.getInstance().isServiceActivated) {
    return <Redirect href={'/root/auth'} />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'(tabs)'} />
      <Stack.Screen name={'compose'} />
    </Stack>
  );
});

export default RootMainLayout;
