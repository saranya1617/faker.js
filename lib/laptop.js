/**
 *
 * @namespace faker.laptop
 */
var laptop = function (faker) {
  var self = this;

  /**
   * name
   *
   * @method faker.laptop.name
   */
  self.name = function() {
      return faker.random.arrayElement(faker.definitions.laptop.name);
  };

  /**
   * processor
   *
   * @method faker.laptop.processor
   */
  self.processor = function() {
      return faker.random.arrayElement(faker.definitions.laptop.processor);
  };
/**
   * department
   *
   * @method faker.laptop.department
   */
  self.price = function() {
      return faker.random.arrayElement(faker.definitions.laptop.price);
  };
}


module['exports'] = laptop;
