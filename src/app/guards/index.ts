import {AuthGuard, LocalUserGuard, RegisteredGuard, RegisteredUserGuard} from './auth.guard';

export const guards: any[] = [
  LocalUserGuard,
  RegisteredUserGuard,
  RegisteredGuard,
  AuthGuard
];

export * from './auth.guard';

