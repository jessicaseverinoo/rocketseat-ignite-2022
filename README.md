### rocketseat-ignite-2022

Projeto para estudos de react.

#### Projeto: fundamentos React - 01
- Folder: 01-fundamentos-react-js
- Figma: https://www.figma.com/file/wXO1grKdrz36m3FZoRpBiL/Ignite-Feed?node-id=1%3A35


##Anotações

No react existem 3 momentos em que um componente é renderizado novamente:
1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente;


Sempre que for atualizar uma informação e ela depende do valor que ela tinha anteriormente, ou seja, depende dela mesmo, pode ser utilizado um padrão utilizando funções. Exemplo:

````
const [likeCount, setLikeCount] = useState(0);

function handleLikeComment() {
  setLikeCount((state) => {
    return state + 1;
  }
  
  setLikeCount((state) => {
    return state + 1;
  }
}
