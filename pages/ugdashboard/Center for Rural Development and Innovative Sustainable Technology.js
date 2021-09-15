import { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/router'
import Head from "next/head";
import Layout from "../../components/layout";
import Styles from '../../styles/css/dashboard.module.css';

const DepartmentPage = () => {
  const router = useRouter();
  const dep = router.query['dep'];

  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  useEffect(() => {
    const fetchUrl = 'https://script.google.com/macros/s/AKfycbzM_cPnLCbg1tqk3pUA3rY5TKoLvNVcaZuVTCypC08A4MqFkIg8CykDzEqL-7pRhnRf/exec?sheetName=Form Responses 1';
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((resData) => setData((currentData) => {
        let index = resData.data.header.findIndex((col) => col === 'department');
        return {
          header: resData.data.header,
          data: resData.data.data.filter((item) => item[index] === dep)
        }
      }))
      .catch((err) => console.log(err));
  }, [dep])

  //console.log(dep, data);

  const loginHandler = (e) => {
    e.preventDefault();
    setError('');
    setLoginStatus('Signing you in...');
    const fetchUrl = 'https://script.google.com/macros/s/AKfycbzM_cPnLCbg1tqk3pUA3rY5TKoLvNVcaZuVTCypC08A4MqFkIg8CykDzEqL-7pRhnRf/exec?sheetName=Login Creds';
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((resData) => {
        let index = resData.data.data.findIndex((item) => item[0] === username);
        return (index < 0) ? (false) : (resData.data.data[index]);
      })
      .then((userData) => {
        if (userData) {
          if (password === userData[2]) {
            if (dep === userData[1]) {
              console.log(dep);
              setIsAuth(true);
            } else {
              router.push(`/ugdashboard/${userData[1]}`);
              setIsAuth(true);
            }
          } else {
            setError('Invalid Credentials')
          }
        } else {
          setError('Invalid Credentials')
        }
        setLoginStatus('');
      });
  }


  return (
    <Layout>
      <Head>
        <title>Login | Dashboard</title>
      </Head>
      {isAuth ? (
        <section className="awards content">
          <div className="table-container" style={{ overflow: 'auto' }}>
            {(data != undefined && data.length != 0) ? (
              <table>
                <thead>
                  <tr>
                    {data.header.map((key) => (
                      <th className={Styles.cell}>
                        {key.toLowerCase().split(' ').map(function (word) {
                          return (word.charAt(0).toUpperCase() + word.slice(1));
                        }).join(' ')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((row) => (
                    <tr>
                      {row.map((item) => (
                        <td className={Styles.cell}>
                          {item || '-'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className={Styles.loading}>
                Loading...
              </div>
            )}

          </div>
        </section>
      ) : (
        <section className={Styles.formContainer}>
          <div>
            {error && <div className={Styles.error}>
              {error}
            </div>}
            <form onSubmit={loginHandler}>
              <label htmlFor="username">Username</label> <br />
              <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} /><br /> <br />
              <label htmlFor="password">Password</label> <br />
              <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} /> <br />
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
            {loginStatus && <div>
              {loginStatus}
            </div>}
          </div>
        </section>
      )}
    </Layout>
  )
}

export default DepartmentPage;