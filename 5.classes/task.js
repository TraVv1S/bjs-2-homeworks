class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    _state = 100;
    type = null;

    fix() {
        this.state = this._state * 1.5;
        
    }

    set state(value) {
        this._state = value < 0 ? 0 : value > 100 ? 100 : value;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    type = "magazine";
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author;
    }
    type = "book";
}

class NovelBook extends Book {
    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);


//Задача 2

class Library {
    constructor(name) {
        this.name = name;
    }
    
    books = []

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        const res = this.books.find(e => e[type] === value)
        return res ? res : null
    }

    giveBookByName(bookName) {
        const desiredBook = this.findBookBy('name', bookName)
        if (desiredBook) {
            this.books = this.books.filter(e => e.name !== desiredBook.name)
        }
        return desiredBook
    }
}

//Задача 3

class Student {
    constructor(name, gender, age) {
        this.name = name,
        this.gender = gender,
        this.age = age
    }

    marks = {}

    setSubject(subjectName) {
        this.subject = subjectName
    }

    addMark(mark, subject) {
        if (mark < 1 || mark > 5 || !Number.isInteger(mark)) {
            return "Ошибка, оценка должна быть числом от 1 до 5"
        }
        if(this.marks[subject] === undefined){ 
            this.marks[subject] = [mark]
        } else {
            this.marks[subject].push(mark)
        }
    }
    
    getAverage() {
        const allMarks = Object.values(this.marks).flat()
        console.log(allMarks)
        return allMarks.reduce((a,b) => a + b, 0) / allMarks.length
    }

    getAverageBySubject(subject) {
        if (this.marks[subject]) {
            return this.marks[subject].reduce((a,b) => a + b, 0) / this.marks[subject].length
        } else {
            return "Несуществующий предмет"
        }
        
    }
        
    exclude(reason) {
        delete this.marks;
        delete this.subject;
        this.excluded = reason;
    }
    
}