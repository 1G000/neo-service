export default {
  services: {
    buttons: [
      {
        key: 0,
        text: 'Ремонт автомобилей',
        class: 'group-button button-left',
      },
      {
        key: 1,
        text: 'Шиномонтаж',
        class: 'group-button button-middle',
      },
      {
        key: 2,
        text: 'Замена масла',
        class: 'group-button button-right',
      },
    ],
    content: [
      {
        key: 0,
        image: new URL('@/assets/repair-img.jpg', import.meta.url).href,
        text: 'Автосервис NEO предотавляет услуги по ремонту автомобилей любой сложности, обеспечивая высокое качество и профессионализм на каждом этапе работы. Мы понимаем, что каждый автомобиль уникален и требует индивидуального подхода, поэтому наши специалисты готовы справиться с любыми задачами — от простых технических обслуживаний до сложных капитальных ремонтов.',
        buttonText: 'Записаться на диагностику',
      },
      {
        key: 1,
        image: new URL('@/assets/disc-img.jpg', import.meta.url).href,
        text: 'Профессиональные услуги шиномонтажа для автомобилей всех типов. Автосервис NEO обеспечивает высокое качество обслуживания и использует современное оборудование, чтобы гарантировать безопасность и комфорт ваших поездок.',
        buttonText: 'Переобуться',
      },
      {
        key: 2,
        image: new URL('@/assets/oil-img.jpg', import.meta.url).href,
        text: 'Профессиональная услуга замены масла для автомобилей всех марок и моделей. Мы понимаем, как важно поддерживать Ваш автомобиль в отличном состоянии, и обеспечиваем высокое качество обслуживания с использованием только проверенных материалов.',
        buttonText: 'Заменить масло',
      },
    ],
  },
}