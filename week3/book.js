let bookCollection = [
    {
        title: `Harry Potter and the Philospher's Stone`,
        author: 'Jk Rowling',
        yearPublished: 1997,
        readStatus: true,
        getSummary() {
            return `Title : ${this.title} Author: ${this.author} Year Published : ${this.yearPublished} Read Status: ${this.readStatus}`;
        },
        toggleReadStatus() {
            this.readStatus = !this.readStatus;
        }
    },
    {
        title: 'Harry Poter and Prisoner of Azkaban',
        author: 'Jk Rowling',
        yearPublished: 1999,
        readStatus: true,
        getSummary() {
            return `Title : ${this.title} Author: ${this.author} Year Published : ${this.yearPublished} Read Status: ${this.readStatus}`;
        },
        toggleReadStatus() {
            this.readStatus = !this.readStatus;
        }

    },
    {
        title: 'Harry Poter and Goblet of Fire',
        author: 'Jk Rowling',
        yearPublished: 2000,
        readStatus: false,
        getSummary() {
            return `Title : ${this.title} Author: ${this.author} Year Published : ${this.yearPublished} Read Status: ${this.readStatus}`;
        },
        toggleReadStatus() {
            this.readStatus = !this.readStatus;
        }
    }, {
        title: 'Harry Poter and Half-Blood Prince',
        author: 'Jk Rowling',
        yearPublished: 2005,
        readStatus: false,
        getSummary() {
            return `Title : ${this.title} Author: ${this.author} Year Published : ${this.yearPublished} Read Status: ${this.readStatus}`;
        },
        toggleReadStatus() {
            this.readStatus = !this.readStatus;
        }
    },
    {
        title: 'Alchemist',
        author: 'Paulo Coelho',
        yearPublished: 1993,
        readStatus: true,
        getSummary() {
            return `Title : ${this.title} Author: ${this.author} Year Published : ${this.yearPublished} Read Status: ${this.readStatus}`;
        },
        toggleReadStatus() {
            this.readStatus = !this.readStatus;
        }
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        yearPublished: 2018,
        readStatus: true,
        getSummary() {
            return `Title : ${this.title} Author: ${this.author} Year Published : ${this.yearPublished} Read Status: ${this.readStatus}`;
        },
        toggleReadStatus() {
            this.readStatus = !this.readStatus;
        }
    }];

let addButton = document.getElementById('addBook');
addButton.addEventListener('click', addBook);

let addFrontButton = document.getElementById('addBookFront');
addFrontButton.addEventListener('click', addBookFront)

let removeFront = document.getElementById('removeFrontBook');
removeFront.addEventListener('click', removeFrontBook)

let removeLast = document.getElementById('removeLastBook');
removeLast.addEventListener('click', removeLastBook)

function addBook(event) {
    event.preventDefault();
    let book = {
        title: '',
        author: '',
        yearPublished: '',
        readStatus: false,
        getSummary() {
            return `Title : ${this.title} Author: ${this.author} Year Published : ${this.yearPublished} Read Status: ${this.readStatus}`;
        },
        toggleReadStatus() {
            this.readStatus = !this.readStatus;
        }
    }
    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.yearPublished = document.getElementById('year').value;

    let isRead = document.querySelector('input[name="status"]:checked').value;
    if (isRead === 'yes') {
        book.readStatus = true;
    }
    else {
        book.readStatus = false;
    }

    bookCollection.push(book);
    console.log(bookCollection);
    alert('Book added successfully!');

}
function addBookFront(event) {
    event.preventDefault();
    let book = {
        title: '',
        author: '',
        yearPublished: '',
        readStatus: false,
        getSummary() {
            return `Title : ${this.title} Author: ${this.author} Year Published : ${this.yearPublished} Read Status: ${this.readStatus}`;
        },
        toggleReadStatus() {
            this.readStatus = !this.readStatus;
        }
    }
    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.yearPublished = document.getElementById('year').value;

    let isRead = document.querySelector('input[name="status"]:checked').value;
    if (isRead === 'yes') {
        book.readStatus = true;
    }
    else {
        book.readStatus = false;
    }
    bookCollection.unshift(book);
    console.log(bookCollection);
    alert('Book added successfully!');

}

function removeLastBook() {
    bookCollection.pop();
    console.log(bookCollection);
    alert('Last Book is removed')
}
function removeFrontBook() {
    bookCollection.shift();
    console.log(bookCollection);
    alert('Front book is removed')
}

let library = document.getElementById('library');

function getAllTitles() {
    library.innerHTML = '';
    let books = bookCollection.map(book => book.title);

    let ol = document.createElement('ol');
    books.map(book => {
        let li = document.createElement('li');
        li.innerText = book;
        ol.appendChild(li)
    })

    library.appendChild(ol);

}


function getBooksByAuthor() {
    let author = prompt('Enter Author Name: ');

    let books = bookCollection.filter(book => book.author === author);
    library.innerHTML = '';
    books.map(book => {
        let div = document.createElement('div');
        div.innerHTML = book.getSummary();
        library.appendChild(div)
    })


}

function getTotalBooksPublishedBefore() {
    let year = Number(prompt('Enter the Year:'));
    let books = bookCollection.filter(book => book.yearPublished <= year);
    console.log(books);
    library.innerHTML = '';
    books.map(book => {
        let div = document.createElement('div');
        div.innerHTML = book.getSummary();
        library.appendChild(div)
    })

}

function removeBookByTitle() {
    let title = prompt('Enter Title');
    let index;
    for (let i = 0; i < bookCollection.length; i++) {

        if (bookCollection[i].title === title) {
            index = i;
            break;
        }

    }
    bookCollection.splice(index, 1);
    alert('Book is deleted')
}






function getBooksByReadStatus() {
    let status = Number(prompt('Enter the book read status(1/0): '));

    let books = bookCollection.filter(book => book.readStatus == status);
    library.innerHTML = '';
    books.map(book => {
        let div = document.createElement('div');
        div.innerHTML = book.getSummary();
        library.appendChild(div)
    })

}

function getSubLibrary() {
    let start = Number(prompt('Enter Start Index: '));
    let end = Number(prompt('Enter Last Index: '));

    let subLibrary = bookCollection.slice(start, end);

    library.innerHTML = '';
    subLibrary.map(book => {
        let div = document.createElement('div');
        div.innerHTML = book.getSummary();
        library.appendChild(div)
    })

}
