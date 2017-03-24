import React from 'react'
import moment from 'moment'
import css from './Home.css'

const Home = () => {
  const age = moment().diff(moment('21-08-1987', 'DD-MM-YYYY'), 'years')
  return (
    <div className={css.home}>
      <h1>Привет!</h1>
      <p>Меня зовут Лев и на самом деле я не в космосе, а вместе с вами на Земле.</p>
      <p>Мне {age} лет и я Frontend-разработчик.</p>
      <p>Вот некоторые из слов, которые я знаю:</p>
      <ul>
        <li>Vanilla JS</li>
        <li>jQuery</li>
        <li>React</li>
        <li>Redux</li>
        <li>Lodash</li>
        <li>Apollo</li>
      </ul>
      <p>Например это портфолио работает на React + Redux ;) (
        <a className='link' target='_blank' href='https://github.com/levkus/portfolio'>Github</a>)
      </p>
    </div>
  )
}

export default Home
