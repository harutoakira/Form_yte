const list = document.getElementById('list');
const search = document.getElementById('search')
var data = ['Hoàng', 'Vinh', 'Long', 'Khoa', 'Quang', 'Hùng'];

render(data);

search.addEventListener('keyup', function(event) {
    render(data.filter(function(item) {
        return item.toLocaleLowerCase().indexOf(search.value.toLocaleLowerCase()) >= 0;
    }))
})

function render(data) {
    list.innerHTML = data.map(function(item) {
        return '<li class="item">' + item + '</li>';
    }).join('')
}