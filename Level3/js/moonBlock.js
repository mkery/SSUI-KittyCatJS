

class MoonBlock {

  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.element = this.buildMoonBlock();
  }

  buildMoonBlock()
  {
    var block = document.createElement('div');
    block.classList.add('block');
    block.style.left = this.x;
    block.style.top = this.y;
    return block;
  }

  getDiv()
  {
    return this.element;
  }

}
