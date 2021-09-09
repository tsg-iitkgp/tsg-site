import { useState, useEffect, memo } from 'react';
import { useRouter } from 'next/router'
import Head from "next/head";
import Layout from "../../components/layout";

const DepartmentPage = () => {
  const router = useRouter();
  const dep = router.query['dep'];

  const [data, setData] = useState();

  console.log(dep)

  useEffect(() => {
    const fetchUrl = 'https://script.google.com/macros/s/AKfycbxbZj_rtEqCS7ARCwlx3-7Uk8IfQGtw97VWhGjXB1R9QnIJqBaE-uODJ24dIRje9yE/exec?sheetName=Form Responses 1';
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


  return (
    <Layout>
      <Head>
        <title>Login | Dashboard</title>
      </Head>
      <section className="awards content">
        <div className="table-container" style={{ overflow: 'auto' }}>
          {(data != undefined && data.length != 0) ? (
            <table>
              <thead>
                <tr>
                  {data.header.map((key) => (
                    <th>
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
                      <td>{item}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{
              backgroundColor: '#fff',
              borderRadius: 12,
              textAlign: 'center',
              padding: '30px 20px'
            }}>
              Loading...
            </div>
          )}

        </div>
      </section>
    </Layout>
  )
}

export default DepartmentPage;