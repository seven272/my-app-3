import { useEffect, useState } from 'react'

const MainPage = () => {
  const [time, setTime] = useState('loading....')

  const getCurrnetTime = () => {
    let now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    const str = `${hours}:${minutes}:${seconds}`
    setTime(str)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      getCurrnetTime()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1>Приложение MY APP 3</h1>
      <br />
      <h3>Текущее время: {time}</h3>
    </div>
  )
}

export default MainPage
