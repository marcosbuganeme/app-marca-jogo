import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// persistindo autenticaçao do usuário mesmo após pressionar o f5
export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'marcajogo',
      storage,
      whitelist: ['auth', 'user'], // passando os reducers que desejamos persistir
    },
    reducers
  );

  return persistedReducer;
};
