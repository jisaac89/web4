import { observable } from 'mobx';

interface IForm { }

class ContactStore {

    @observable form: IForm = {
        "FNAME": "",
        "EMAIL": "",
        "PHONE": "",
        "COMPANY": "",
        "IDEA": "",
        "BUDGET": ""
    }

    @observable budget = null;

    onChange(value, key) {
        this.form[key] = value;
    }

    selectBudget(budget) {
        this.form['BUDGET'] = budget;
        this.budget = budget;
    }

};

export const contactStore = new ContactStore();