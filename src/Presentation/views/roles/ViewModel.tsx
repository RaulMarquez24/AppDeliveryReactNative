import React from 'react'
import { useUserLocal } from '../../hooks/useUserLocal';
import { RemoveUserLocalUseCase } from '../../../Domain/useCases/userLocal/RemoveUserLocal';

export const RolesViewModel = () => {
  
  const { user } = useUserLocal();

  const removeSession = async () => {
    await RemoveUserLocalUseCase();
  }
  
  return {
    user,
    removeSession
  }
}


export default RolesViewModel;