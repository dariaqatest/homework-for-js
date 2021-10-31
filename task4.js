function getABC() {
    return this.replace(/[^a-zA-Z ]/g, "");
}

String.prototype.getABC = getABC;

var result = 'abcABC!!_HE!!LL??OO'.getABC();
;