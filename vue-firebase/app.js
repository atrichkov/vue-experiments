const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>', // this template will be injected inside mounted element
    data() {
        return {
            showBooks: true,
            title: 'The final empire',
            author: 'Someone',
            books: [
                { title: 'name of the wind', author: 'patrick routhors', img: 'assets/1.jpg', isFav: true },
                { title: 'the way of king', author: 'brandon andreson', img: 'assets/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon andreson', img: 'assets/3.jpg', isFav: true },
            ],
            age: 41,
            x: 0,
            y: 0,
            url: 'https://www.theverge.com/',
        };
    },
    methods: {
        // functions available inside component
        changeTitle(title) {
            this.title = title;
        },
        toggleBooks() {
            this.showBooks = !this.showBooks;
        },

        handleEvent(e) {
            console.log(e);
        },
        handleMouseMove(e) {
            console.log(e);
            this.x = e.clientX;
            this.y = e.clientY;
        },
        toggleFav(index) {
            this.books[index].isFav = !this.books[index].isFav;
        },
    },
    computed: {
        // computed properties are properties that depends on other data
        filteredBooks() {
            return this.books.filter((book) => book.isFav);
        },
    },
});

app.mount('#app');
