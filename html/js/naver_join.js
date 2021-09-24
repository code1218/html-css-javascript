const join_id = document.querySelector('#id');
const join_submit = document.querySelector('.join_submit');

join_id.onblur = () => {
    alert(join_id.value + '는 사용 가능한 아이디 입니다.')
}

join_submit.onclick = () => {
    alert(join_id.value + ' 계정을 생성하였습니다.')
    print();
}

const long_text = document.getElementsByClassName('long_text');
console.log(long_text[0].value);
console.log(long_text[1].value);
console.log(long_text[2].value);
console.log(long_text[3].value);
long_text[4].style.display = 'none';

const id_text = document.getElementById('id');
id_text.style.display = 'block';
id_text.value = 'junil1234';

const inputs = document.getElementsByTagName('input');
console.log(inputs);

const long_text2 = document.querySelectorAll('.long_text');
const id_text2 = document.querySelector('#id');
const inputs2 = document.querySelectorAll('input');

console.log(long_text2);
console.log(id_text2);
console.log(inputs2);