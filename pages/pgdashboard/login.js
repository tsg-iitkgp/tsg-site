import Head from "next/head";
import Layout from "../../components/layout";

const userData = [
    {
        username: 'hod@aero',
        department: 'AE',
        password: 'random'
    }
]

export default function Login() {

    const loginHandler = (e) => {
        e.preventDefault;
        console.log(e);
    }
    return (
            <Layout>
                <Head>Login | Dashboard</Head>
                {/* <form onSubmit={loginHandler}>
                    <input type="text" name="userid" />
                    <input type="password" name="password" />
                </form> */}
            </Layout>

    );
}
