import { useState } from 'react'
import './App.css'
import { getAllData } from './api/instance'

function App() {
  const [data, setData] = useState([])
  useState(() => {
    getAllData()
      .then(data => {
        // Sử dụng toàn bộ dữ liệu ở đây
        setData(data.posts)


      })
      .catch(error => {
        console.log('Đã xảy ra lỗi:', error);
      });

  })
  console.log(data)




  return (

    <>
      <h1 className="text-3xl font-bold underline">
        {data.map((item)=>{
          return item.id
        })}
      </h1>
    </>
  )
}

export default App
