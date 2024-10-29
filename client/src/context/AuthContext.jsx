import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import supabase from "../config/supabase";
import { getCurrentUserProfile } from "../services/doc.service";
import { getCurrentFeatures } from "../services/feature.service";
import { useQuery } from '@tanstack/react-query';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const { data: featuresData, isLoading: featuresLoading } = useQuery({
        queryKey: ['features'],
        queryFn: getCurrentFeatures,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
    })

    useEffect(() => {

        const initSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
            setLoading(false);
        };

        initSession();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, []);

    const getCurrentUser = async () => {
        if (!session) return;
        const user_id = session.user.id;
        const user = await getCurrentUserProfile(user_id);
        setUser(user);
    }

    const contextData = {
        session,
        user,
        signIn: async (provider, redirect_url) => {
            await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: import.meta.env.VITE_APP_SUPABASE_REDIRECT_URI + '/auth/success?redirect_url=' + redirect_url,
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                },
            });
        },
        signOut: async () => {
            await supabase.auth.signOut();
            setUser(null);
            navigate('/');
        },
        features: {
            data: featuresData,
            isLoading: featuresLoading
        },
        refetch: getCurrentUser
    }

    useEffect(() => {
        if (session) {
            getCurrentUser();
        }
    }, [session])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <div className="flex flex-col gap-16 items-center justify-center min-h-screen">
                <div className="flex gap-3 items-center">
                    <img src="/eyeball.svg" alt="Logo" className="w-16" />
                    <div className="flex divide-x divide-gray-600 gap-3">
                        <p className="text-white text-2xl font-semibold">RETINA<br /> 2024</p>
                        <p className="text-3xl fancyfont font-semibold text-yellow-500 pl-2">AIIMS<br /> Bhopal</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Loader /> <span className="font-medium text-white pl-3 text-lg">Loading...</span>
                </div>
            </div> : children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider };