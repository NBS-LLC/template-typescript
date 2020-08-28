class Template {
    private _message: string = "Hello World";

    get message(): string {
        return this._message;
    }
}

console.log(new Template().message);
