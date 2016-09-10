﻿function handleSearch() {
    let query = this.input.value;
    if (query) {
        this.sandbox.publish('perform-search', query);
    }
}

function resetSearch() {
    this.input.value = "";
    this.sandbox.publish('reset-search', null);
}

class Search implements spaMVP.Module {
    sandbox: spaMVP.Sandbox;
    input: Element;
    button: Element;
    reset: Element;

    constructor(sb) {
        this.sandbox = sb;
    }

    init() {
        this.input = document.getElementById('search_input');
        this.button = document.getElementById('search_button');
        this.reset = document.getElementById('reset_search');

        this.button.addEventListener('click', handleSearch.bind(this));
        this.reset.addEventListener('click', resetSearch.bind(this));
    }

    destroy() {
        // remove listeners
    }
}