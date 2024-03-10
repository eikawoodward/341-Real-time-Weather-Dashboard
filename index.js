const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// 定义OpenWeatherMap API密钥，替换为你自己的密钥
const apiKey = 'your_openweathermap_api_key';

// 处理获取当前天气条件的请求
app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;

  try {
    // 调用OpenWeatherMap API获取天气数据
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherData = response.data;

    // 返回天气数据给前端
    res.json({ weather: weatherData });
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

// 启动Express应用程序
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
