class Goal {
    constructor(id, title, category, counter = null) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.counter = counter;
        maxCounter = counter;
    }
}

export default Goal;