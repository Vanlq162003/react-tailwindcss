import axios from "axios";
export function getAllData() {
  const URL = "https://local:3000/posts";

  return axios.get(URL)
    .then(response => {
      // Lấy dữ liệu JSON từ phản hồi
      const jsonData = response.data;
      return jsonData;
    })
    .catch(error => {
      console.log('Đã xảy ra lỗi:', error);
    });
}

// Sử dụng hàm getAllData
