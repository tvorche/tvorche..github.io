class  sliderBeforeAfter  {
  constructor ( option )  {
    это . class_name  =  option . class_name ? вариант . имя_класса : 'слайдер'
    это . ширина  =  опция . ширина ? вариант . ширина : '500 пикселей'
    это . высота  =  вариант . высота ? вариант . высота : '400 пикселей'
    это . border_width  =  опция . border_width ? вариант . border_width : '2px'
    это . border_color  =  option . border_color ? вариант . border_color : '#fff'
    это . src  =  option . src ? вариант . src : 'https://picsum.photos/id/10/500/350'
    это . src2  =  опция . src2
      ? вариант . src2
      : 'https://picsum.photos/id/1050/500/350'
    это . showMoreOptionsLog  =  option . showMoreOptionsLog
      ? ( option . showMoreOptionsLog  =  true )
      : ( option . showMoreOptionsLog  =  false )
  }

  createElem ( )  {
    пусть  elem  =  this . class_name
    if  ( this . class_name )  {
      const  resizeDiv  =  документ . createElement ( 'div' )
      const  img  =  документ . createElement ( 'img' )
      const  img2  =  документ . createElement ( 'img' )

      elem  =  документ . querySelector ( `. $ { elem } ` )
      элем . стиль . позиция  =  'относительный'
      элем . стиль . ширина  =  это . ширина
      элем . стиль . высота  =  это . высота

      img . src  =  это . src
      img2 . src  =  это . src2
      img . стиль . ширина  =  это . ширина
      img2 . стиль . ширина  =  это . ширина
      img . стиль . высота  =  '100%'
      img2 . стиль . высота  =  '100%'

      resizeDiv . стиль . позиция  =  'абсолютный'
      resizeDiv . стиль . top  =  '0px'
      resizeDiv . стиль . left  =  '0px'
      resizeDiv . стиль . maxWidth  =  '100%'
      resizeDiv . стиль . высота  =  '100%'
      resizeDiv . стиль . дисплей  =  'блок'
      resizeDiv . стиль . переполнение  =  'скрыто'
      resizeDiv . стиль . borderRight  =  ` $ { this . border_width } твердый $ { this . border_color } `

      элем . добавить ( resizeDiv ,  img )
      resizeDiv . добавить ( img2 )

      // показать все параметры в console.log
      if  ( this . showMoreOptionsLog )  {
        консоль . стол ( это )
      }

      // вызов метода обработчика mousemove throw params
      это . mouseMoveHandler ( {
        firstDiv : elem ,
        secondDiv : resizeDiv ,
        img2 : img2 ,
      } )
    }  иначе  вернуться
  }

  start ( )  {
    это . createElem ( )
  }

  // все события mousemove
  mouseMoveHandler ( {  firstDiv ,  secondDiv  } )  {
    secondDiv . стиль . ширина  =  firstDiv . clientWidth / 2  +  ' пиксель '
    // обработчик перемещения мыши
    firstDiv . addEventListener ( 'mousemove' ,  ( e )  =>  {
      пусть  x  =  e . offsetX
      secondDiv . стиль . ширина  =  x  +  'px'
      secondDiv . стиль . переход  =  'нет'
    } )
    // обработчик mouseleave
    firstDiv . addEventListener ( 'mouseleave' ,  ( e )  =>  {
      secondDiv . стиль . переход  =  '.3s'
      пусть  x  =  firstDiv . clientWidth / 2
      secondDiv . стиль . ширина  =  x  +  'px'
    } )
  }
}

// инициализируем слайдер
let  slider  =  new  sliderBeforeAfter ( {
  class_name : 'слайдер' ,
  ширина : '600 пикселей' ,
  высота : '350 пикселей' ,
  border_width : '2px' ,
  border_color : 'красный' ,
  showMoreOptionsLog : истина ,
} )

слайдер . начало ( )
