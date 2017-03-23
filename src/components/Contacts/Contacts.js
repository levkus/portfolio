import React from 'react'
import css from './Contacts.css'
import FontAwesome from 'react-fontawesome'

const Contacts = () => {
  return (
    <div className={css.container}>
      <h1>Связь</h1>
      <p>Я живу в Москве и отвечаю по московскому времени ;)</p>
      <p>Вот несколько способов связаться со мной:</p>
      <ul className={css.list}>
        <li><FontAwesome fixedWidth name='envelope' />
          <a className={css.link} href='mailto:lev.ostanin@gmail.com'>lev.ostanin@gmail.com</a>
        </li>
        <li><FontAwesome fixedWidth name='telegram' />
          <a className={css.link} href='tg://resolve?domain=levkus'>@levkus</a>
        </li>
        <li><FontAwesome fixedWidth name='facebook' />
          <a className={css.link} target='_blank' href='http://facebook.com/levkus'>facebook.com/levkus</a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts
