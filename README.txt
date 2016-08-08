ScrollAnimation

Плагин позволяет добавлять анимацию к элементам при прокрутке страницы.

Использование:
Подключите css файл внутри <head>:
'<link rel="stylesheet" type="text/css" href="scrollAnimation/scrollAnimation.css"/>'

Далее перед закрывающим '</body>' подключите скриптовый файл:
'<script type="text/javascript" src="scrollAnimation/scrollAnimation.js"></script>'

Package Managers:
npm install scrollAnimation

Для его инициализации нужно вызвать функцию scrollAnimation и передать в нее нужные параметры.
Пример:
    scrollAnimation({
        element: '.user-animation'
    });

И наслаждаемся его работой.

Параметры которые плагин может принимать:
element - селектор элементов для анимирования;

direction - принимает значение true или false ( по-умолчанию false ), определяет будет ли анимация работать в одном направлении;

appearanceField - принимает числовое значение ( по-умолчанию 4 ), определяет часть экрана в которой будет срабатывать анимация;

animation - принимает строку ( по-умолчанию "fade-out" ), определяет тип анимации ( подробнее об этом далее );

animateCss - принимает значение true или false ( по-умолчанию false ), определяет будет ли использоваться библиотека AnimateCss ( подробнее об этом далее );


Стандартные анимации ( параметр "animation " ):

fade-out ( изначально идет по-умолчанию )

fade-out-top

fade-out-left

fade-out-right

zoom-in

zoom-out


Подключение библиотеки AnimateCss ( параметр "animateCss" ):
Для работы с AnimateCss используется ее стандартный вариант подключения,
для элементов которым необходимо добавить анимацию мы задаем класс "animated",
а так же нам надо добавить класс соответствующей анимации, на пример "bounce",
для того чтобы плагин мог работать нужно перед названием класса анимации добавить "scroll-",
пример:

 "scroll-bounce"

в итоге у вас должен получится элемент вида:


<div class="animated scroll-bounce">Example</div>