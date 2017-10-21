class Foo {
  constructor (bar) {
    this.bar = bar
  }
  baz () {
    console.log(this.bar)
  }
}

let foo = new Foo('Hello, World!')
foo.baz()
