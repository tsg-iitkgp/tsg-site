import { useRouter } from 'next/router'

export default function Private({ children }) {
    // if (window.localStorage.getItem('authentication')) {
    if (true) {
        return (
            <div>
                {children}
            </div>
        )
    } else {
        useRouter().push('/dashboard/login');
    }
}
