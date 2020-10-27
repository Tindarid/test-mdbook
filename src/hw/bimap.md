# Bimap

> [GitHub Classroom](https://classroom.github.com/a/S-IrHqh3)  

В этом задании вам необходимо написать [`bimap`](https://en.wikipedia.org/wiki/Bidirectional_map)  
Интерфейс вы найдете в репозитории, в файле `bimap.h`  

`bimap` —  это структура данных, в которой хранится набор пар и эффективно выполняется поиск ключа по значению. В отличие от `map`, поиск в `bimap` может выполняться как по левым (left) элементам пар, так и по правым (right).  

`bimap` параметризуется 2 типами (left и right) и 2 компараторами, которые определяют порядок на этих типах.

Итераторы вашего `bimap` должны повторять соответствующее поведение для `map` и позволять проходить все элементы с одной стороны в порядке, определенном переданным компаратором.

Вам предлагается с помощью описания изложенного выше, интерфейсу и уже пройденным материалам курса придумать и реализовать эффективный `bimap` по
* Использованию памяти
* Общему кол-ву аллокаций
* Скорости операций