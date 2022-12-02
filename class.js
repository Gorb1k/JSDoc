/** Class representing a user.
 * @module User
 * @example
 * const ihor = new User("Ihor")
 * ihor.sayHello()
 */
class User {
  /**
   * Create a user.
   * @param {string} name - The name of the current user.
   */
  constructor(name) {
    /**
     * A name of the current user.
     * @protected
     * @type {string}
     * */
    this.name_ = name
  }

  /**
   * Creates greetings.
   * @param {string} [greetings="Hello"] - What kind of greetings we apply
   * @returns {string} Greetings result
   */
  sayHello(greetings = "Hello") {
    const greetingsResult = `${greetings}, my name is ${this.name_}`
    console.log(greetingsResult)
    return greetingsResult
  }
}

export default User
