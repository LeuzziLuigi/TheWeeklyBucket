class Goal {
    constructor(id, title, category, img = null, counter = null) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.img = img;
        this.counter = counter;
        maxCounter = counter;
    }
}

export default Goal;