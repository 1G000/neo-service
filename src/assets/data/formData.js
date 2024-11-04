export default {
  form: {
    title: 'Хотите записаться в Neo?',
    subtitle: 'Заполните данные ниже и мы Вам перезвоним',
    formItems: [
      {
        key: 0,
        icon: 'src/assets/user.png',
        type: 'text',
        placeholder: 'Ваше имя',
      },
      {
        key: 1,
        icon: 'src/assets/phone.png',
        type: 'tel',
        placeholder: 'Номер телефона',
      },
      {
        key: 2,
        icon: 'src/assets/wrench.png',
        type: 'text',
        placeholder: 'Услуга',
      },
    ],
    buttonText: 'Отправить',
  },
}
