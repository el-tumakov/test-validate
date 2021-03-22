# Тестовое задание

Необходимо реализовать компонент с методом validate.
Компонент может быть вложен сам в себя.

При вызове метода validate необходимо, чтобы компонент вызывал данный метод у своих детей (только validate-component).

Схематично:

```html
<validate-component>
  <!-- 1 -->
  <some-component>
    <validate-component></validate-component>
    <!-- 2 -->
  </some-component>
  <some-component>
    <validate-component>
      <!-- 3 -->
      <validate-component></validate-component>
      <!-- 4 -->
    </validate-component>
  </some-component>
  <validate-component></validate-component>
  <!-- 5 -->
</validate-component>
```

Вызов метода validate у компонента 1 должен вызвать данный метод у компонентов 2, 3, 5.
Вызов метода у компонента 3 должен вызвать метод у компонента 4.

Вложенность компонентов может быть неограничена.

Итоговый проект необходимо разместить на github.com
