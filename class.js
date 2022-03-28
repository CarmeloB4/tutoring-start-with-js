// Esempio base di una classe in Javascript (altre info nel readme, ma vedrete bene le classi con typescript)

class AuthenticationUser {
    constructor(id,name,surname,age,password) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.password = password;
    }

    get fullname() {
        return `${this.name} ${this.surname}`
    }
}

const authUser = new AuthenticationUser(1, "Pippo", "Topolino", 20, "Ciao@");

const authUser2 = new AuthenticationUser(2, "Pluto", "Paperino",10, "Bau@")

console.log(authUser, authUser2)

console.log("Fullname",authUser.fullname)
