import {en} from "./languages/en.js"
import {en_US} from "./languages/en_US.js"
import {nl} from "./languages/nl.js"

var languages = {
    en: en,
    en_US: en_US,
    nl: nl,
    nl_NL: nl,
};

export class Translator {
    constructor(lang = "en") {
        this.lang = lang.replace(/['"]+/g, '').replace('-', '_');
    }

    translate(key, search, replace) {
        var lang = this.lang;
        var translated;
        search = search || '';
        replace = replace || '';

        try {
            translated = key.split('.').reduce(function (o, i) { return o[i]; }, languages[lang]);
        }
        catch (e) {
            try {
                translated = key.split('.').reduce(function (o, i) { return o[i]; }, languages[lang].substring(0,2));
            }
            catch (e) {
                try {
                    translated = key.split('.').reduce(function (o, i) { return o[i]; }, languages['en']);
                }
                catch (e) {
                    translated = '{' + key + '}';
                }
            }
        }
        if ((translated === undefined) || (!(typeof translated === 'string') && !(translated instanceof String))) {
            translated = '{' + key + '}';
        }
        if (search !== '' && replace !== '') {
            translated = translated.replace(search, replace);
        }
        return translated;
    }
}
