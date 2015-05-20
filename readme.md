###python

протестировать в ToDoApp класс MyUsefulClass

используется стандартный django unit tests + пакет coverage

        coverage run --source='./ToDoApp/core/utils.py' manage.py test
        coverage html

### js

протестировать файл js/testme.js

тесты в файле js/tests.js

используется karma с фреймворком jasmine

рабочее окружение собирается через

    npm install

тесты выполнять через
    karma start karma.config.js
