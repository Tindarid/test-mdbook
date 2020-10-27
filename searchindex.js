Object.assign(window.search, {"doc_urls":["course.html#about-course","course.html#С","course.html#organization","course.html#lectures","ide.html#ide","clion.html#clion","clion.html#Установка","clion.html#clang-tidy","clion.html#clang-format","practice.html#Практики","practice.html#Краткая-инструкция-по-работе-с-github","practice.html#Краткая-инструкция-по-работе-с-githubclassroom","hw.html#Домашние-задания","hw.html#Краткая-инструкция-по-работе","hw/bimap.html#bimap"],"index":{"documentStore":{"docInfo":{"0":{"body":5,"breadcrumbs":1,"title":1},"1":{"body":3,"breadcrumbs":0,"title":0},"10":{"body":7,"breadcrumbs":1,"title":1},"11":{"body":1,"breadcrumbs":1,"title":1},"12":{"body":1,"breadcrumbs":0,"title":0},"13":{"body":11,"breadcrumbs":0,"title":0},"14":{"body":17,"breadcrumbs":1,"title":1},"2":{"body":6,"breadcrumbs":1,"title":1},"3":{"body":1,"breadcrumbs":1,"title":1},"4":{"body":7,"breadcrumbs":1,"title":1},"5":{"body":0,"breadcrumbs":2,"title":1},"6":{"body":16,"breadcrumbs":1,"title":0},"7":{"body":24,"breadcrumbs":3,"title":2},"8":{"body":23,"breadcrumbs":3,"title":2},"9":{"body":2,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"Данный курс читается студентам кафедры КТ в университете ИТМО. Лектор — Иван Сорокин Преподаватели практики и контакты: Лев Довжик @Dogzik Нурсан Валеев @Tindarid Павел Безбородов @hazzus Захар Коваль @StarOrpheus Джиблави Ибрагим @c1c9c7bi1","breadcrumbs":"About course","id":"0","title":"About course"},"1":{"body":"Начало начал — :) 2020 draft — описание осеннего курса (3 семестр)","breadcrumbs":"С++","id":"1","title":"С++"},"10":{"body":"Форкаете соотвествующий репозиторий Пишите код, проходите тесты, пушите в свой master Создаете PR из своей ветки вида into CPP-KT:master from YOURNAME:master Пишите проверяющему/добавляете его в ревьюверы, проходите проверки, исправляете до закрытия вашего PR с лейблом Accepted.","breadcrumbs":"Краткая инструкция по работе с Github","id":"10","title":"Краткая инструкция по работе с Github"},"11":{"body":"To be determined ...","breadcrumbs":"Краткая инструкция по работе с GithubClassroom","id":"11","title":"Краткая инструкция по работе с GithubClassroom"},"12":{"body":"Здесь перечислены описания домашних заданий и ссылки на GithubClassroom","breadcrumbs":"Домашние задания","id":"12","title":"Домашние задания"},"13":{"body":"После перехода в classroom у вас создатся приватный репозиторий со стартовым кодом, тестами, конфигурациями и т.д. Вы можете коммитить в любую ветку кроме ветки feedback. Она создаётся автоматически вместе с PR из master в неё. Никаких форспушей в master после первой проверки, если иное не оговорено с преподавателем. Это ломает историю внутри PR . После того как вы выполните ДЗ вы отправляете его на проверку с помощью соотвествующей формы (в папке на GoogleDrive). Если это ваша первая попытка - то выбирайте режим сдача, иначе - правки. В качестве ссылки на PR присылайте ссылку на тот самый автоматически созданный PR master -> feedback. Далее заявка автоматически попадёт в таблицу и вы сможете наблюдать за её статусом.","breadcrumbs":"Краткая инструкция по работе","id":"13","title":"Краткая инструкция по работе"},"14":{"body":"GitHub Classroom В этом задании вам необходимо написать bimap Интерфейс вы найдете в репозитории, в файле bimap.h bimap — это структура данных, в которой хранится набор пар и эффективно выполняется поиск ключа по значению. В отличие от map, поиск в bimap может выполняться как по левым (left) элементам пар, так и по правым (right). bimap параметризуется 2 типами (left и right) и 2 компараторами, которые определяют порядок на этих типах. Итераторы вашего bimap должны повторять соответствующее поведение для map и позволять проходить все элементы с одной стороны в порядке, определенном переданным компаратором. Вам предлагается с помощью описания изложенного выше, интерфейсу и уже пройденным материалам курса придумать и реализовать эффективный bimap по Использованию памяти Общему кол-ву аллокаций Скорости операций","breadcrumbs":"Домашние задания » Bimap","id":"14","title":"Bimap"},"2":{"body":"Slack & Discord — можно получить у преподавателей (анонсы, вопросы, сдача экзамена, проведение практик) GoogleDrive — все нужные вам формы и таблицы Баллы — текущая успеваемость Запись на сдачу дз и практик Match github and student","breadcrumbs":"Organization","id":"2","title":"Organization"},"3":{"body":"Twitch — лекции & разборы практик","breadcrumbs":"Lectures","id":"3","title":"Lectures"},"4":{"body":"Вы можете использовать IDE по вкусу для выполнения практик/домашних заданий. Но чтобы ваш код был в определенном стиле и при написании кода вы быстро увидели опечатки/минорные баги - вам предоставлены .clang-tidy и .clang-format файлы в репозиториях. В этом разделе описаны этапы конфигурации некоторых IDE (рекомендуется Clion ).","breadcrumbs":"IDE","id":"4","title":"IDE"},"5":{"body":"","breadcrumbs":"IDE » CLion","id":"5","title":"CLion"},"6":{"body":"На официальном сайте (ссылка в header-e - кликабельна) можно найти информацию об установке через Toolbox (если вы используете другие IDE от Jetbrains) или об установке на Windows . На Ubuntu рекомендуется следующий процесс установки (чтобы можно было обновлять среду разработки через пакетный менеджер): $ sudo apt install snap\n$ sudo snap install clion --classic","breadcrumbs":"IDE » Установка","id":"6","title":"Установка"},"7":{"body":"Clion имеет встроенный clang-tidy , но вы можете указать внешний, если он есть на вашей системе. Нужно убедиться, что вы поставили галочку на Prefer .clang-tidy files over IDE settings чтобы использовать .clang-tidy курса. Path: Settings / Preferences | Editor | Inspections - C/C++, General, Clang-Tidy clang-tidy-clion","breadcrumbs":"IDE » clang-tidy","id":"7","title":"clang-tidy"},"8":{"body":"Clion имеет встроенный (альтернативный) clang-format , но вы можете указать внешний, если он есть на вашей системе. Нужно убедиться, что вы поставили галочку на Enable ClangFormat (only for C/C++/Objective-C чтобы использовать .clang-format курса. Path: Settings / Preferences | Editor | Code Style - ClangFormat clang-format-clion Либо другой, более быстрый вариант. В нижней панели экрана, поставить соотвествующую галочку. clang-format-clion-another","breadcrumbs":"IDE » clang-format","id":"8","title":"clang-format"},"9":{"body":"Здесь перечислены описания практик и ссылки на Github / GithubClassroom","breadcrumbs":"Практики","id":"9","title":"Практики"}},"length":15,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"2":{"0":{"2":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"14":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"1":{"tf":1.0}}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"p":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"14":{"tf":1.0}}}},"df":1,"docs":{"14":{"tf":2.6457513110645907}}}},"df":0,"docs":{}}}},"c":{"/":{"c":{"+":{"+":{"/":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"1":{"c":{"9":{"c":{"7":{"b":{"df":0,"docs":{},"i":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"8":{"tf":1.0}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":3,"docs":{"4":{"tf":1.4142135623730951},"7":{"tf":2.449489742783178},"8":{"tf":2.23606797749979}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"13":{"tf":1.0},"14":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":5,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.7320508075688772}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"10":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}},"i":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"7":{"tf":1.0},"8":{"tf":1.0}}}}}}},"df":1,"docs":{"6":{"tf":1.0}},"n":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"8":{"tf":2.23606797749979}}}},"df":0,"docs":{}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":3,"docs":{"11":{"tf":1.0},"12":{"tf":1.0},"9":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"df":4,"docs":{"10":{"tf":1.0},"14":{"tf":1.0},"2":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"r":{"df":2,"docs":{"13":{"tf":1.0},"2":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"h":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"d":{"df":3,"docs":{"4":{"tf":1.7320508075688772},"6":{"tf":1.0},"7":{"tf":1.0}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"k":{"df":0,"docs":{},"t":{":":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"10":{"tf":1.0},"13":{"tf":1.7320508075688772}}}}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"7":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":2,"docs":{"10":{"tf":1.4142135623730951},"13":{"tf":2.0}},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"7":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"7":{"tf":1.4142135623730951},"8":{"tf":1.0}}}},"l":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"u":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":2.449489742783178}}}},"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{":":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"breadcrumbs":{"root":{"2":{"0":{"2":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"14":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"1":{"tf":1.0}}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"p":{".":{"df":0,"docs":{},"h":{"df":1,"docs":{"14":{"tf":1.0}}}},"df":1,"docs":{"14":{"tf":2.8284271247461903}}}},"df":0,"docs":{}}}},"c":{"/":{"c":{"+":{"+":{"/":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"1":{"c":{"9":{"c":{"7":{"b":{"df":0,"docs":{},"i":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":1,"docs":{"8":{"tf":1.0}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":3,"docs":{"4":{"tf":1.4142135623730951},"7":{"tf":2.6457513110645907},"8":{"tf":2.449489742783178}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":2,"docs":{"13":{"tf":1.0},"14":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":5,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.7320508075688772}}}}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"10":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}},"i":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"z":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"7":{"tf":1.0},"8":{"tf":1.0}}}}}}},"df":1,"docs":{"6":{"tf":1.0}},"n":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"13":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.0},"8":{"tf":2.449489742783178}}}},"df":0,"docs":{}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":3,"docs":{"11":{"tf":1.4142135623730951},"12":{"tf":1.0},"9":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"df":4,"docs":{"10":{"tf":1.4142135623730951},"14":{"tf":1.0},"2":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"r":{"df":2,"docs":{"13":{"tf":1.0},"2":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"h":{"a":{"df":0,"docs":{},"z":{"df":0,"docs":{},"z":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"i":{"d":{"df":5,"docs":{"4":{"tf":2.0},"5":{"tf":1.0},"6":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951},"8":{"tf":1.0}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"k":{"df":0,"docs":{},"t":{":":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}}}}},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"10":{"tf":1.0},"13":{"tf":1.7320508075688772}}}}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"p":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"7":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":2,"docs":{"10":{"tf":1.4142135623730951},"13":{"tf":2.0}},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"7":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"7":{"tf":1.4142135623730951},"8":{"tf":1.0}}}},"l":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"u":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":2,"docs":{"4":{"tf":1.0},"7":{"tf":2.6457513110645907}}}},"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"x":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}}}},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{":":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"10":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"title":{"root":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"14":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"7":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"11":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"df":1,"docs":{"10":{"tf":1.0}}},"df":0,"docs":{}}}}}},"i":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});