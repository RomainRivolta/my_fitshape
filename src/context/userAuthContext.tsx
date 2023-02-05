import { createUserWithEmailAndPassword, Auth, User, UserCredential, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { createContext, useState, useEffect, ReactNode } from 'react';
import { auth } from '../firebase';


export interface IAuthContextModel {
    auth: Auth,
    user: User|null,
    signUp:(email: string, password: string) => Promise<UserCredential>,
    signIn:(email: string, password: string) => Promise<UserCredential>
}

export const AuthContext  = createContext<IAuthContextModel>({} as IAuthContextModel);

export const AuthProvider = ({children}: { children?: ReactNode}) => {

    const [user, setUser] = useState<User|null>(null);

    const signUp = (email: string,password: string): Promise<UserCredential> => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email: string, password: string): Promise<UserCredential> => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const resetPassword = (email: string): Promise<void> => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubsrcibe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return unsubsrcibe;
    },[]);

    const value = {
        signUp,
        signIn,
        resetPassword,
        user,
        auth,
    };
    
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}