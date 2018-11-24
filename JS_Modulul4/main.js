
    /*document.getElementById('size-12').onclick = function() {
        document.body.style.fontSize = 12 + 'px';
      };
    document.getElementById('size-14').onclick = function() {
        document.body.style.fontSize = 14 + 'px';
      };
    document.getElementById('size-16').onclick = function() {
        document.body.style.fontSize = 16 + 'px';
      };*/

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

document.getElementById('size-12').onclick = makeSizer(12);
document.getElementById('size-14').onclick = makeSizer(14);
document.getElementById('size-16').onclick = makeSizer(16);
