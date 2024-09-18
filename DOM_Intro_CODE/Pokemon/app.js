// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const newImg = document.createElement('img');

for (let i = 1; i<= 158; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    pokemon.classList.add('pokemon');

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}

// for (let i = 1; i <= 151; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add('pokemon');

//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png`

//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon);
// }

/* <div>
    <img></img>
    <span>#2</span>
</div> */

// 下の行は編集しないでください！
const form = document.querySelector('form');

// この下にコードを書いてください
form.addEventListener('submit', function (e) {
    // フォームのデフォルトの送信動作を抑制
    e.preventDefault();

    // inputの値を取得
    const inpVal = form.elements.product.value;
    const inpQty = form.elements.qty.value;

    // 新しい<li>要素を作成し、テキストを設定
    const newListItem = document.createElement('li');
    newListItem.textContent = `${inpQty} ${inpVal}`; // 商品名と数量を含める

    // <ul>要素を取得して、新しい項目を追加
    const ul = document.querySelector('ul');
    ul.appendChild(newListItem);

    // 入力フィールドをクリア
    form.elements.product.value = '';
    form.elements.qty.value = '';
});
