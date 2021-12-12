class Observer {
    constructor() {
        this.__state = {};

        this.subcribers = {};
    }

    subsribe(type, handler) {
        this.subcribers[type] = handler;
    }

    unsubsribe(type) {
        delete this.subcribers[type];
    }

    notify(type) {
        // const { state, subcribers } = this;
        const state = this.state;
        const subcribers = this.subcribers;

        const evenHandler = subcribers[type];

        if (evenHandler) {
            evenHandler(state);
        }
    }

    get state() {
        return this.__state;
    }

    set state(value) {
        this.__state = value;

        console.log(`STATE changed`, this.state);
    }
}

// Подписка
// Генерация событий

const observer = new Observer();

export default observer;